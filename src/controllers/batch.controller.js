const BatchService = require("../services/batch.service");

class BatchController {

    static async create(req, res) {
        try {
            const batch = await BatchService.create(req.body);

            return res.status(201).json({
                success: true,
                data: batch
            });

        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
    }

    static async getAll(req, res) {
        try {
            const result = await BatchService.findAll(req.query);

            return res.json({
                success: true,
                ...result
            });

        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    static async getById(req, res) {
        try {
            const batch = await BatchService.findById(req.params.id);

            return res.json({
                success: true,
                data: batch
            });

        } catch (err) {
            return res.status(404).json({
                success: false,
                message: err.message
            });
        }
    }

    static async update(req, res) {
        try {
            const batch = await BatchService.update(
                req.params.id,
                req.body
            );

            return res.json({
                success: true,
                message: "Batch updated successfully",
                data: batch
            });

        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
    }

    static async delete(req, res) {
        try {
            await BatchService.delete(req.params.id);

            return res.json({
                success: true,
                message: "Batch deleted successfully"
            });

        } catch (err) {
            return res.status(404).json({
                success: false,
                message: err.message
            });
        }
    }
}

module.exports = BatchController;
