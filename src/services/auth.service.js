const bcrypt = require("bcrypt");
const db = require("../models");
const { generateToken } = require("../utils/jwt");
const dbUtils = require("../db/sequelize.utils");
const { withTransaction } = require("../db/transaction");

const User = db.User;
const Event = require("../modelsmongo/events.model");



class AuthService {
  static async signup({ email, password, name }) {
    return withTransaction(async (tx) => {
      const existing = await dbUtils.findOne(User, { email }, { transaction: tx }, true);
      if (existing) throw new Error("EMAIL_ALREADY_EXISTS");

      const hashed = await bcrypt.hash(password, 10);
      const user = await dbUtils.create(
        User,
        { email, password: hashed, name },
        { transaction: tx }
      );

      return { id: user.id, email: user.email };
    });
  }

  static async login({ email, password }) {

    const user = await dbUtils.findOne(User, { email });
    if (!user) throw new Error("INVALID_CREDENTIALS");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new Error("INVALID_CREDENTIALS");

  
      const token = await generateToken({ userId: user.id, email: user.email });
      await Event.create({
          userId: user.id,
          type: "LOGIN",
          payload: { email: user.email },
        }); 
      return {token};
    
  }
}

module.exports = AuthService;