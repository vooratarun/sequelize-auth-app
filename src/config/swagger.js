const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");
console.log(path.join(__dirname, "../routes/auth.routes.js"));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sequelize Auth API",
      version: "1.0.0",
      description: "Auth, Users, Roles & RBAC APIs"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server"
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        BearerAuth: []
      }
    ]
  },
 apis: [
    path.join(__dirname, "../routes/auth.routes.js")
  ]

};

module.exports = swaggerJsdoc(options);
