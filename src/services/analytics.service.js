const User = require("../models/user.model");
const Event = require("../modelsmongo/events.model");

exports.trackLogin = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("USER_NOT_FOUND");

  await Event.create({
    userId,
    type: "LOGIN",
    payload: { email: user.email },
  });
};
