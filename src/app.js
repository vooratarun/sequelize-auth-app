const express = require("express");
const swaggerUi = require("swagger-ui-express");

const correlationMiddleware = require("./middlewares/correlation.middleware");

const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");

const userRoutes = require("./routes/user.routes");
const roleRoutes = require("./routes/role.routes");
const productRoutes = require("./routes/product.routes");
const examRoutes = require("./routes/exam.routes");


// const swaggerSpec = require("./config/swagger");
const swaggerSpec = require("./swagger/openapi.js");

    
const app = express();


app.use(correlationMiddleware);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/products", productRoutes);
app.use("/api/exams", examRoutes);


/**
 * Swagger
 */
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

/**
 * Health check
 */
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});


app.use(require("./middlewares/error.middleware"));

module.exports = app;