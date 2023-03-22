const Entreprise = require("../sequelize").models.entreprise;

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

exports.make = async (info) => {
  const entreprise = await Entreprise.create(info);
  if (!entreprise) {
    return null;
  }
  return entreprise.toJSON();
};

/**
 * @summary Modifier les données d'une entreprise
 * @returns
 */

exports.edit = async (id, info) => {
  const entreprise = await Entreprise.update(info, {
      where: {id},
  });
  if(!entreprise){
    return null;
  }
  return entreprise.toJSON();
};

/**
 * @summary Supprimer une entreprise
 * @returns
 */

exports.delete = async (id) => {
  const entreprise = await Entreprise.destroy({
    where: {id},
  });
  if (!entreprise) {
    return null;
  }
  return entreprise.toJSON();
};
