const router = require("express").Router();
const controller = require("../controllers/role.controller");
const auth = require("../middlewares/auth.middleware");

router.post(
  "/",
  auth,          // optional: restrict to admin
  controller.createRole
);

router.post(
  "/:roleId/users",
  auth,
  controller.assignUsersToRole
);

router.get(
  "/:roleId/users",
  auth,
  controller.getUsersByRole
);

module.exports = router;
