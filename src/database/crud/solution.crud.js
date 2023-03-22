const Solution = require("../sequelize").models.solution;

/**
 * @summary Trouver une solution,
 * @returns
 */

exports.find = async (id) => {
  const solution = await Solution.findOne({ where: { id: id } });
  if (!solution) {
    return null;
  }

  return solution.toJSON();
};

/**
 * @summary Trouver toutes les solutions
 * @returns
 */

exports.findAll = async () => {
  const solutions = await Solution.findAll();
  if (solutions) {
    return null;
  }
  return solutions.toJSON();
};

/**
 * @summary Créer une solution
 * @returns
 */

exports.make = async (info) => {
  const solution = await Solution.create(info);
  if (!solution) {
    return null;
  }
  return solution.toJSON();
};

/**
 * @summary Modifier les données d'une solution
 * @returns
 */

exports.edit = async (id, info) => {
  const solution = await Solution.update(info, {
    where: {id},
  });
  if (!solution) {
    return null;
  }
  return solution.toJSON();
};

/**
 * @summary Supprimer une solution
 * @returns
 */

exports.delete = async (id) => {
  const solution = await Solution.destroy({
    where: {id},
  });
  if (!solution) {
    return null;
  }
  return solution.toJSON();
};
