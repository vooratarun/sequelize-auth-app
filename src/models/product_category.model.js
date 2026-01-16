module.exports = (sequelize, DataTypes) =>
  sequelize.define("product_categories", {
    product_id: { type: DataTypes.BIGINT, primaryKey: true },
    category_id: { type: DataTypes.BIGINT, primaryKey: true }
  }, { timestamps: false , underscored: true
});
