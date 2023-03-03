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

exports.make = async (email) => {
  const solution = await Solution.create({
    email: email,
  });
  if (!solution) {
    return null;
  }
  return solution.toJSON();
};

/**
 * @summary Modifier les données d'une solution
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer une solution
 * @returns
 */

exports.delete = async () => {};
