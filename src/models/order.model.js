module.exports = (sequelize, DataTypes) =>
  sequelize.define("orders", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.BIGINT,
    total_amount: DataTypes.DECIMAL(10, 2),
    status: DataTypes.ENUM("PLACED", "PAID", "SHIPPED", "DELIVERED", "CANCELLED")
  }, {
    tableName: "orders", 
    timestamps: true,
  });
