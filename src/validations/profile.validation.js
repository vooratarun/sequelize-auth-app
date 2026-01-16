const Joi = require("joi");

/**
 * Update profile validation
 */
const updateProfileSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
});

module.exports = {
  updateProfileSchema
};
