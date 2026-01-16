const router = require("express").Router();
const controller = require("../controllers/profile.controller");
const auth = require("../middlewares/auth.middleware");
const validate = require("../validations/validate");
const { updateProfileSchema } = require("../validations/profile.validation");

router.get(
  "/me",
  auth,
  controller.getProfile
);

router.put(
  "/me",
  auth,
  validate(updateProfileSchema),
  controller.updateProfile
);

module.exports = router;
