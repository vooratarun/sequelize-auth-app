const Joi = require("joi");

/**
 * Single product schema
 */
const bulkProductItemSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required(),

  price: Joi.number()
    .positive()
    .precision(2)
    .required(),

  description: Joi.string()
    .allow(null, ""),

  categoryIds: Joi.array()
    .items(Joi.number().integer().positive())
    .min(1)
    .required(),

  stock: Joi.number()
    .integer()
    .min(0)
    .required()
});

/**
 * Bulk products request schema
 */
const bulkProductsSchema = Joi.object({
  products: Joi.array()
    .items(bulkProductItemSchema)
    .min(1)
    .max(1000)   // safety limit
    .required()
});

module.exports = {
  bulkProductsSchema
};
