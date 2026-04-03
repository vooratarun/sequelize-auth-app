module.exports = (sequelize, DataTypes) => {
    return sequelize.define("DeliveryExecution", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        delivery_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        score: DataTypes.DECIMAL(6,2),

        batch_id: DataTypes.INTEGER,
        subbatch_id: DataTypes.INTEGER,
        class_id: DataTypes.INTEGER,
        year_id: DataTypes.INTEGER,

        class_name: DataTypes.STRING(100),
        year_name: DataTypes.STRING(50),
        batch_name: DataTypes.STRING(100),
        subbatch_name: DataTypes.STRING(100)
    }, {
        tableName: "delivery_execution",
        timestamps: true,
        underscored: true,
        indexes: [
            { fields: ["delivery_id"] },
            { fields: ["student_id"] },
            { unique: true, fields: ["delivery_id", "student_id"] }
        ]
    });
};
