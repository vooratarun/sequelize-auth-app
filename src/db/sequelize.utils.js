const db = require("../models");

const create = (Model, data, options = {}) =>
  Model.create(data, options);

const findOne = (Model, where, options = {}) =>
  Model.findOne({ where, ...options });



const findById = (Model, id, options = {}) =>
  Model.findByPk(id, options);

const findAll = (Model, where = {}, options = {}) =>
  Model.findAll({ where, ...options });

const update = async (Model, data, where, options = {}) => {
  const [count, rows] = await Model.update(
    data,
    {
      where,
      returning: true,   // Postgres
      ...options
    }
  );

  return { count, rows };
};

const destroy = (Model, where, options = {}) =>
  Model.destroy({ where, ...options });


const rawQuery = async (sql, replacements = {}, options = {}) => {
  return db.sequelize.query(sql, {
    replacements,
    ...options
  });
};

module.exports = {
  create,
  findOne,
  findById,
  findAll,
  update,
  destroy,
  rawQuery
};
