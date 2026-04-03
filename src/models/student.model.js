module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Student", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(150), allowNull: false },
        class_id: DataTypes.INTEGER,
        year_id: DataTypes.INTEGER,
        batch_id: DataTypes.INTEGER,
        subbatch_id: DataTypes.INTEGER
    }, {
        tableName: "student",
        timestamps: true,
        underscored: true,
        indexes: [
            { fields: ["class_id"] },
            { fields: ["year_id"] },
            { fields: ["batch_id"] },
            { fields: ["subbatch_id"] }
        ]
    });
};
