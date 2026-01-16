const { Op } = require("sequelize");
const { Product, Category, Inventory ,sequelize } = require("../models");

class ProductService {
  static async browseProducts(query) {
    const {
      q,
      categoryId,
      minPrice,
      maxPrice,
      sortBy = "createdAt",
      order = "desc",
      page = 1,
      limit = 20
    } = query;

    const where = {};
    const include = [];

    // 🔍 Search
    if (q) {
      where.name = { [Op.iLike]: `%${q}%` }; // Postgres
    }

    // 💰 Price filter
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price[Op.gte] = minPrice;
      if (maxPrice) where.price[Op.lte] = maxPrice;
    }

    // 🗂️ Category filter
    if (categoryId) {
      include.push({
        model: Category,
        where: { id: categoryId },
        through: { attributes: [] }
      });
    }

    // 📦 Inventory (optional)
    include.push({
      model: Inventory,
      attributes: ["stock"]
    });

    const offset = (page - 1) * limit;

    const { rows, count } = await Product.findAndCountAll({
      where,
      include,
      order: [[sortBy, order.toUpperCase()]],
      limit: Number(limit),
      offset
    });

    return {
      data: rows,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(count / limit)
      }
    };
  }

  static validateCategories = async (categoryIds, tx) => {
      const count = await Category.count({
        where: { id: categoryIds },
        transaction: tx
      });

      if (count !== categoryIds.length) {
        throw new Error("INVALID_CATEGORY_IDS");
      }
    };

  static async createProduct(data) {
    const {
      name,
      price,
      description,
      status,
      categoryIds,
      stock
    } = data;

  const tx = await sequelize.transaction();

  try {
    // IMPORTANT: await validation
    await this.validateCategories(categoryIds, tx);

    const product = await Product.create(
      { name, price, description, status },
      { transaction: tx }
    );

    await product.setCategories(categoryIds, {
      transaction: tx
    });

    await Inventory.create(
      {
        productId: product.id, // use model attribute, not DB column
        stock
      },
      { transaction: tx }
    );

    await tx.commit();
    return product;

  } catch (err) {
    await tx.rollback();
    throw err; // DO NOT swallow
  }
}


  static async getProductById(id) {
    return Product.findByPk(id, {
      include: [
        { model: Category, through: { attributes: [] } },
        { model: Inventory }
      ]
    });
  }

static async updateProduct(id, data) {
  const tx = await sequelize.transaction();

  try {
    const product = await Product.findByPk(id, {
      transaction: tx,
      lock: tx.LOCK.UPDATE
    });

    if (!product) {
      throw new Error("PRODUCT_NOT_FOUND");
    }

    await product.update(data, { transaction: tx });

    if (data.categoryIds) {
      // optional but recommended
      await this.validateCategories(data.categoryIds, tx);

      await product.setCategories(data.categoryIds, {
        transaction: tx
      });
    }

    if (data.stock !== undefined) {
      await Inventory.update(
        { stock: data.stock },
        {
          where: { productId: id }, // ✅ use model attribute
          transaction: tx
        }
      );
    }

    await tx.commit();
    return product;

  } catch (err) {
    await tx.rollback();
    throw err; // IMPORTANT
  }
}


  static async deleteProduct(id) {
    await Product.update(
      { status: "INACTIVE" },
      { where: { id } }
    );
  }

static async bulkCreateProducts(products) {
  const results = [];

  for (const productData of products) {
    try {
      await sequelize.transaction(async (tx) => {
        const product = await Product.create(
          {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            status: "ACTIVE"
          },
          { transaction: tx }
        );

        await Inventory.create(
          {
            product_id: product.id,
            stock: productData.stock
          },
          { transaction: tx }
        );

        await product.setCategories(
          productData.categoryIds,
          { transaction: tx }
        );

        results.push({
          name: productData.name,
          status: "SUCCESS"
        });
      });
    } catch (err) {
      results.push({
        name: productData.name,
        status: "FAILED",
        reason: err.message
      });
    }
  }

  return results;
}


}

module.exports = ProductService;