// models/rolePermission.model.js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "role_permissions",
    {
      roleId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        field: "role_id"
      },
      permissionId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        field: "permission_id"
      }
    },
    {
      tableName: "role_permissions",
      timestamps: true,
      underscored: true
    }
  );
