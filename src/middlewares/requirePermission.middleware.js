const { QueryTypes } = require("sequelize");
const { User, Role, Permission ,sequelize} = require("../models");

const requirePermission = (permissionName) => {
  return async (req, res, next) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ message: "UNAUTHORIZED" });
      }

    //   const user = await User.findByPk(userId, {
    //     include: {
    //       model: Role,
    //       required: true,
    //       include: {
    //         model: Permission,
    //         required: true,
    //         where: { name: permissionName },
    //         attributes: ["name"],
    //         through: { attributes: [] }
    //       },
    //       through: { attributes: [] }
    //     }
    //   });


      
    //   if (!user) {
    //     return res.status(403).json({ message: "FORBIDDEN" });
    //   }

      const result = await sequelize.query(
                `
                SELECT 1
                FROM user_roles ur
                JOIN role_permissions rp ON rp.role_id = ur.role_id
                JOIN permissions p ON p.id = rp.permission_id
                WHERE ur.user_id = :userId
                    AND p.name = :permissionName
                LIMIT 1
                `,
                {
                    replacements: { userId, permissionName },
                    type: QueryTypes.SELECT
                }
                );

    if (!result.length) {
        return res.status(403).json({ message: "FORBIDDEN NO PERMISSION" });
    }

      next();
    } catch (error) {
      console.error("Permission check failed", error);
      res.status(500).json({ message: "PERMISSION_CHECK_FAILED" });
    }
  };
};

module.exports = requirePermission;
