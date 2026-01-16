const { v4: uuidv4 } = require("uuid");

module.exports = (req, res, next) => {
  const incomingCorrelationId =
    req.headers["x-correlation-id"] ||
    req.headers["x-request-id"];

  const correlationId = incomingCorrelationId || uuidv4();

  req.correlationId = correlationId;

  // Echo back to client
  res.setHeader("X-Correlation-Id", correlationId);

  next();
};
