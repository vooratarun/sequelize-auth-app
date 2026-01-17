const j2s = require("joi-to-swagger");

const { signupSchema, loginSchema } = require("../validations/auth.validation");
const { createRoleSchema } = require("../validations/role.validation");
const { createProductSchema } = require("../validations/product.validation");

module.exports = {
  SignupRequest: j2s(signupSchema).swagger,
  LoginRequest: j2s(loginSchema).swagger,
  CreateRoleRequest: j2s(createRoleSchema).swagger,
  CreateProductRequest: j2s(createProductSchema).swagger
};
