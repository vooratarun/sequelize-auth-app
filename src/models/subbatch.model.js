module.exports = (sequelize, DataTypes) => {
    return sequelize.define("SubBatch", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
    }, {
        tableName: "sub_batch",
        timestamps: true,
        underscored: true
    });
};
