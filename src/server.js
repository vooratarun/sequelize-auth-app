require("dotenv").config();

console.log(" Environment:", process.env.NODE_ENV);


const app = require("./app");
const db = require("./models");
const { connectSequelize } = require("./config/database");
const {connectMongo}  = require("./config/mongoose");

const PORT = process.env.PORT || 3000;

// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log("Server running on port", PORT));
// });

(async () => {
  await Promise.all([
    connectSequelize(),
    connectMongo(),
  ]);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})();
