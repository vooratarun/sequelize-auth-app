const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const {
  signupSchema,
  loginSchema
} = require("../validations/auth.validation");
const validate = require("../validations/validate");


router.post("/signup",
      validate(signupSchema),
     controller.signup);

     
router.post("/login",
      validate(loginSchema),
     controller.login);

module.exports = router;