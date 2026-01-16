const db = require("../models");

const withTransaction = async (callback) => {
  const tx = await db.sequelize.transaction();
  try {
    const result = await callback(tx);
    await tx.commit();
    return result;
  } catch (err) {
    await tx.rollback();
    throw err;
  }
};

module.exports = { withTransaction };