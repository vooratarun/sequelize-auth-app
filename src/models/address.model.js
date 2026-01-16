module.exports = (sequelize, DataTypes) =>
  sequelize.define("addresses", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT, allowNull: false },
    line1: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING
  },{
    tableName: "addresses",
    timestamps: true,
    underscored: true
  });
