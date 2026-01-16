module.exports = (sequelize, DataTypes) => {
  return sequelize.define("roles", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    tableName: "roles",
    timestamps: true,
    underscored: true
  });
};
