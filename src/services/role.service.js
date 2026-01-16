const db = require("../models");
const dbUtils = require("../db/sequelize.utils");
const { withTransaction } = require("../db/transaction");

const { Role, User } = db;

class RoleService {
  static async createRole({ name }) {
    const existing = await dbUtils.findOne(Role, { name });
    if (existing) {
      throw new Error("ROLE_ALREADY_EXISTS");
    }

    return dbUtils.create(Role, { name });
  }

 static async assignUsersToRole(roleId, userIds = []) {
  if (!Array.isArray(userIds) || userIds.length === 0) {
    throw new Error("USER_IDS_REQUIRED");
  }

  return withTransaction(async (transaction) => {
    const role = await Role.findByPk(roleId, { transaction });
    if (!role) throw new Error("ROLE_NOT_FOUND");

    // Fetch valid users
    const users = await User.findAll({
      where: { id: userIds },
      transaction
    });

    if (users.length !== userIds.length) {
      throw new Error("INVALID_USER_IDS");
    }

    // Fetch already assigned users
    const existingUsers = await role.getUsers({
      where: { id: userIds },
      transaction
    });

    const existingUserIds = new Set(
      existingUsers.map(u => u.id)
    );

    // Filter only new users
    const newUsers = users.filter(
      u => !existingUserIds.has(u.id)
    );

    if (newUsers.length === 0) {
      return {
        roleId,
        assignedUsers: 0,
        message: "Users already assigned"
      };
    }

    await role.addUsers(newUsers, { transaction });

    return {
      roleId,
      assignedUsers: newUsers.length
    };
  });
}

  static async getUsersByRole(roleId) {
    const role = await Role.findByPk(roleId, {
      include: {
        model: User,
        attributes: ["id", "email", "name"]
      }
    });

    if (!role) throw new Error("ROLE_NOT_FOUND");
    return role.users;
  }
}

module.exports = RoleService;
