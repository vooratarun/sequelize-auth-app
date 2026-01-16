module.exports = (sequelize, DataTypes) =>
  sequelize.define("payments", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    order_id: DataTypes.BIGINT,
    provider: DataTypes.STRING,
    status: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED")
  }, {
    tableName: "payments",
    timestamps: true,
    underscored: true
  });
