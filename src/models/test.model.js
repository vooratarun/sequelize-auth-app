module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Test", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        test_name: { type: DataTypes.STRING(200), allowNull: false },
        max_time: { type: DataTypes.INTEGER, allowNull: false },
        max_questions: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        tableName: "test",
        timestamps: true,
        underscored: true
    });
};
