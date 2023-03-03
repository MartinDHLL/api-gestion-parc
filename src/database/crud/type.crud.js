const Type = require("../sequelize").models.type;

/**
 * @summary Trouver une entreprise,
 * @returns
 */

exports.find = async (id) => {
  const entreprise = await Entreprise.findOne({ where: { id: id } });
  if (!entreprise) {
    return null;
  }

  return entreprise.toJSON();
};

/**
 * @summary Trouver toutes les entreprises
 * @returns
 */

exports.findAll = async () => {
  const entreprises = await Entreprise.findAll();
  if (entreprises) {
    return null;
  }
  return entreprises.toJSON();
};

/**
 * @summary Créer une entreprise
 * @returns
 */

exports.make = async (email) => {
  const entreprise = await Entreprise.create({
    email: email,
  });
  if (!entreprise) {
    return null;
  }
  return entreprise.toJSON();
};

/**
 * @summary Modifier les données d'une entreprise
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer une entreprise
 * @returns
 */

exports.delete = async () => {};
