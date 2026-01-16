const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const redis = require("../config/redis");

const JWT_EXPIRY_SECONDS = 60 * 60 * 24; // 1 day

exports.generateToken = async (payload) => {

  const jti = uuidv4();
  payload.jti = jti;

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRY_SECONDS });

  await redis.set(
    `auth:user:${payload.userId}`,
    JSON.stringify({ jti }),
    "EX",
    JWT_EXPIRY_SECONDS // same as JWT expiry
  );
  return token;
};