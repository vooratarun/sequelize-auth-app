module.exports = (sequelize, DataTypes) => {
    return sequelize.define("AcademicYear", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(50), allowNull: false, unique: true }
    }, {
        tableName: "academic_year",
        timestamps: true,
        underscored: true
    });
};
