const db = require("../models");
const { User, Role } = db;

class UserRoleService {
  static async getRolesByUser(userId) {
    const user = await User.findByPk(userId, {
      include: {
        model: Role,
        attributes: ["id", "name"]
      }
    });

    if (!user) throw new Error("USER_NOT_FOUND");
    return user.roles;
  }
}

module.exports = UserRoleService;
