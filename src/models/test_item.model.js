module.exports = (sequelize, DataTypes) => {
    return sequelize.define("TestItem", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        test_id: DataTypes.INTEGER,
        item_id: DataTypes.INTEGER,
        question_order: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        tableName: "test_item",
        timestamps: false,
        underscored: true,
        indexes: [
            { unique: true, fields: ["test_id", "item_id"] },
            { unique: true, fields: ["test_id", "question_order"] }
        ]
    });
};
