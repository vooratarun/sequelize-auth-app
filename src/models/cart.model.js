module.exports = (sequelize, DataTypes) =>
  sequelize.define("carts", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT, unique: true }
  },{
    tableName: "carts",
    timestamps: true,
    underscored: true
  });
