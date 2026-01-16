// models/permission.model.js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "permissions",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "permissions",
      timestamps: true,
      underscored: true
    }
  );
