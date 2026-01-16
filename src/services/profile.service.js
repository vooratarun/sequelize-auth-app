const db = require("../models");
const dbUtils = require("../db/sequelize.utils");

const User = db.User;

class ProfileService {
  static async getProfile(userId) {
    const user = await dbUtils.findOne(
      User,
      { id: userId },
      { attributes: ["id", "email", "name"] }
    );

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    return user;
  }

  static async updateProfile(userId, data) {
    const [updatedCount] = await dbUtils.update(
      User,
      data,
      { id: userId }
    );

    if (!updatedCount) {
      throw new Error("USER_NOT_FOUND");
    }

    return this.getProfile(userId);
  }
}

module.exports = ProfileService;
