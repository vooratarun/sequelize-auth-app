const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");

const UserRoleService = require("../services/userRole.service");


router.get(
  "/:userId/roles",
  auth,
  async (req, res) => {
    try {
      const roles = await UserRoleService.getRolesByUser(req.params.userId);
      res.json({ roles });
    } catch (err) {
      if (err.message === "USER_NOT_FOUND") {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
