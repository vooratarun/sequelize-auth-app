const schemas = require("./schemas");

module.exports = {
  openapi: "3.0.0",

  info: {
    title: "Sequelize Auth & RBAC API",
    version: "1.0.0"
  },

  servers: [
    { url: "http://localhost:3000" }
  ],

  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas
  },

  security: [{ BearerAuth: [] }],

  paths: {
    "/api/auth/signup": {
        post: {
    tags: ["Auth"],
    summary: "Register a new user",
    description: "Creates a new user account",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SignupRequest"
          },
          example: {
            email: "vooratarun634@gmail.com",
            password: "password",
            name: "tarun 634"
          }
        }
      }
    },
    responses: {
      201: {
        description: "User registered successfully"
      },
      400: {
        description: "Validation error"
      }
    }
        }
    },

    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginRequest" }
            }
          }
        },
        responses: { 200: { description: "JWT token" } }
      }
    },

    "/api/roles": {
      post: {
        tags: ["Roles"],
        summary: "Create role",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateRoleRequest" }
            }
          }
        },
        responses: { 201: { description: "Role created" } }
      }
    }
  }
};
