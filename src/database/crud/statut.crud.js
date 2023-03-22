const Statut = require("../sequelize").models.statut;

/**
 * @summary Trouver une statut,
 * @returns
 */

exports.find = async (id) => {
  const statut = await Statut.findOne({ where: { id: id } });
  if (!statut) {
    return null;
  }

  return statut.toJSON();
};

/**
 * @summary Trouver toutes les statuts
 * @returns
 */

exports.findAll = async () => {
  const statuts = await Statut.findAll();
  if (statuts) {
    return null;
  }
  return statuts.toJSON();
};

/**
 * @summary Créer une statut
 * @returns
 */

exports.make = async (info) => {
  const statut = await Statut.create(info);
  if (!statut) {
    return null;
  }
  return statut.toJSON();
};

/**
 * @summary Modifier les données d'une statut
 * @returns
 */

exports.edit = async (id, info) => {
  const statut = await Statut.update(info, {
    where: {id},
  });
  if (!statut) {
    return null;
  }
  return statut.toJSON();
};

/**
 * @summary Supprimer une statut
 * @returns
 */

exports.delete = async (id) => {
  const statut = await Statut.destroy({
    where: {id},
  });
  if (!statut) {
    return null;
  }
  return statut.toJSON();
};
