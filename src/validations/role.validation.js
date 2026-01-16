const Joi = require("joi");

const createRoleSchema = Joi.object({
  name: Joi.string()
    .trim()
    .uppercase()
    .min(2)
    .max(30)
    .required()
});

module.exports = {
  createRoleSchema
};
