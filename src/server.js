require("dotenv").config();

console.log("Database Host:", process.env.DB_HOST);
const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Server running on port", PORT));
});