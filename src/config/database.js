const { Sequelize } = require("sequelize");

const { format } = require("sql-formatter");


const prettyLogger = (sql, time) => {
  try {
    console.log(
      `\n🟦 SQL (${time}ms)\n`,
      format(sql, { language: "postgresql" })
    );
  } catch {
    console.log("\n🟨 RAW SQL\n", sql);
  }
};
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    benchmark: true,
    logging: prettyLogger,
    logQueryParameters: false


  }
);

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Sequelize connected");
  } catch (err) {
    console.error("❌ Sequelize connection failed", err);
    process.exit(1);
  }
};

module.exports = {sequelize, connectSequelize};