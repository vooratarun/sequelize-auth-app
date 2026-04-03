const { Op } = require("sequelize");
const { Batch } = require("../models");

class BatchService {

    static async create(data) {
        const existing = await Batch.findOne({
            where: { name: data.name }
        });

        if (existing) {
            throw new Error("Batch already exists");
        }

        return await Batch.create(data);
    }

    static async findAll({ page, limit, search }) {
        const offset = (page - 1) * limit;

        const whereCondition = search
            ? { name: { [Op.iLike]: `%${search}%` } }
            : {};

        const { count, rows } = await Batch.findAndCountAll({
            where: whereCondition,
            limit,
            offset,
            order: [["created_at", "DESC"]]
        });

        return {
            total: count,
            page,
            totalPages: Math.ceil(count / limit),
            data: rows
        };
    }

    static async findById(id) {
        const batch = await Batch.findByPk(id);

        if (!batch) {
            throw new Error("Batch not found");
        }

        return batch;
    }

    static async update(id, data) {
        const batch = await this.findById(id);
        await batch.update(data);
        return batch;
    }

    static async delete(id) {
        const batch = await this.findById(id);
        await batch.destroy();
        return true;
    }
}

module.exports = BatchService;
