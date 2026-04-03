module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Class", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
    }, {
        tableName: "class",
        timestamps: true,
        underscored: true
    });
};
