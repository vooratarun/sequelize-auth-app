module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user_roles",
    {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      role_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
      }
    },
    { timestamps: true, 
      underscored: true

    }
  );
};
