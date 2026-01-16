const { User, Role } = require("../models");

const requireAnyRole = (allowedRoles = []) => {
  if (!Array.isArray(allowedRoles) || allowedRoles.length === 0) {
    throw new Error("requireAnyRole expects a non-empty array");
  }

  return async (req, res, next) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ message: "UNAUTHORIZED" });
      }

      const user = await User.findByPk(userId, {
        include: {
          model: Role,
          where: {
            name: allowedRoles
          },
          attributes: ["id", "name"],
          through: { attributes: [] }
        }
      });

      if (!user) {
        return res.status(403).json({ message: "FORBIDDEN" });
      }

      next();
    } catch (error) {
      console.error("requireAnyRole failed", error);
      res.status(500).json({ message: "ROLE_CHECK_FAILED" });
    }
  };
};

module.exports = requireAnyRole;
