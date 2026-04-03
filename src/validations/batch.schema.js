const Joi = require("joi");

const createBatchSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required()
});

const updateBatchSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100)
}).min(1);

const batchIdParamSchema = Joi.object({
    id: Joi.number().integer().positive().required()
});

const listBatchQuerySchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    search: Joi.string().trim().allow("")
});

module.exports = {
    createBatchSchema,
    updateBatchSchema,
    batchIdParamSchema,
    listBatchQuerySchema
};
