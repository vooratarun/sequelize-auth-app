module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Item", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        description: { type: DataTypes.TEXT, allowNull: false },
        option_list: DataTypes.JSONB,
        correct_answer: { type: DataTypes.STRING(255), allowNull: false },
        item_type: {
            type: DataTypes.ENUM("multiple_choice", "single_choice", "numeric"),
            allowNull: false
        },
        mark_scheme_id: DataTypes.INTEGER
    }, {
        tableName: "item",
        timestamps: true,
        underscored: true
    });
};
