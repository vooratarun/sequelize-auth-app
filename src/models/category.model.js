module.exports = (sequelize, DataTypes) =>
  sequelize.define("categories", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    parent_id: { type: DataTypes.BIGINT, allowNull: true }
  }, {
    tableName: "categories",
    timestamps: true,
    underscored: true
  });
