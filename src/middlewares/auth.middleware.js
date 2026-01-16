const jwt = require("jsonwebtoken");
const redis = require("../config/redis");

module.exports = async(req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, jti } = decoded;

    const session = await redis.get(`auth:user:${userId}`);
    if (!session) {
      return res.status(401).json({ message: "SESSION_EXPIRED" });
    }

    const { jti: activeJti } = JSON.parse(session);

    if (jti !== activeJti) {
      return res.status(401).json({ message: "SESSION_REVOKED" });
    }

    req.user = { userId };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
