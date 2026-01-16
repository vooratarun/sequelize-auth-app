const Joi = require("joi");

/**
 * Signup validation
 */
const signupSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .required(),

  name: Joi.string()
    .min(2)
    .max(50)
    .optional()
});

/**
 * Login validation
 */
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .required()
});

module.exports = {
  signupSchema,
  loginSchema
};
