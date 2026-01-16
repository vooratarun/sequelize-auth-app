const ProductService = require("../services/product.service");

exports.browseProducts = async (req, res) => {
  try {
    const result = await ProductService.browseProducts(req.query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  const product = await ProductService.getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await ProductService.updateProduct(
    req.params.id,
    req.body
  );
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await ProductService.deleteProduct(req.params.id);
  res.status(204).send();
};

exports.bulkCreateProducts = async (req, res) => {
  const result = await ProductService.bulkCreateProducts(req.body.products);
  res.status(201).json(result);
};


