module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Batch", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: "batch",
        timestamps: true,
        underscored: true
    });
};
