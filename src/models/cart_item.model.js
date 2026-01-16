module.exports = (sequelize, DataTypes) =>
  sequelize.define("cart_items", {
    cart_id: { type: DataTypes.BIGINT, primaryKey: true },
    product_id: { type: DataTypes.BIGINT, primaryKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: "cart_items",
    timestamps: true,
    underscored: true
  });
