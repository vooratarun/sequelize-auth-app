module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Delivery", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        test_id: DataTypes.INTEGER,
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        class_id: DataTypes.INTEGER,
        year_id: DataTypes.INTEGER,
        batch_list: DataTypes.JSONB,
        subbatch_list: DataTypes.JSONB
    }, {
        tableName: "delivery",
        timestamps: true,
        underscored: true,
        indexes: [
            { fields: ["test_id"] },
            { fields: ["class_id"] },
            { fields: ["year_id"] }
        ]
    });
};
