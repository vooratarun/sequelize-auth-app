module.exports = (sequelize, DataTypes) =>
  sequelize.define("inventories", {
    product_id: { type: DataTypes.BIGINT, primaryKey: true },
    stock: { type: DataTypes.INTEGER, allowNull: false }
  },

  {
    tableName: "inventories",
    timestamps: true,
    underscored: true
  }


);
