module.exports = (sequelize, DataTypes) => {
    return sequelize.define("MarkingScheme", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: DataTypes.STRING(100),
        positive_mark: { type: DataTypes.DECIMAL(5,2), defaultValue: 0 },
        negative_mark: DataTypes.DECIMAL(5,2),
        has_partial_marking: { type: DataTypes.BOOLEAN, defaultValue: false },
        partial_mark: DataTypes.DECIMAL(5,2)
    }, {
        tableName: "marking_scheme",
        timestamps: true,
        underscored: true
    });
};
