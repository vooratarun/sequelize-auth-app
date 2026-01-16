module.exports = (sequelize, DataTypes) =>
  sequelize.define("products", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    description: DataTypes.TEXT,
    status: { type: DataTypes.ENUM("ACTIVE", "INACTIVE"), defaultValue: "ACTIVE" }
  },
  {
    tableName: "products",
    timestamps: true,
    underscored: true
  }
);
