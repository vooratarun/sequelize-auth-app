const Joi = require("joi");

const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().allow(null),
  status: Joi.string().valid("ACTIVE", "INACTIVE").default("ACTIVE"),
  categoryIds: Joi.array().items(Joi.number().integer()).min(1).required(),
  stock: Joi.number().integer().min(0).required()
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(255).optional(),
  price: Joi.number().positive().optional(),
  description: Joi.string().allow(null),
  status: Joi.string().valid("ACTIVE", "INACTIVE").optional(),
  categoryIds: Joi.array().items(Joi.number().integer()).optional(),
  stock: Joi.number().integer().min(0).optional()
}).min(1);

module.exports = {
  createProductSchema,
  updateProductSchema
};
