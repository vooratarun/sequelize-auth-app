module.exports = (sequelize, DataTypes) =>
  sequelize.define("order_items", {
    order_id: { type: DataTypes.BIGINT, primaryKey: true },
    product_id: { type: DataTypes.BIGINT, primaryKey: true },
    price: DataTypes.DECIMAL(10, 2),
    quantity: DataTypes.INTEGER
  }, {
    tableName: "order_items",
    timestamps: true,
    underscored: true
  });
