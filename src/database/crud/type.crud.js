const Type = require("../sequelize").models.type;

/**
 * @summary Trouver une type,
 * @returns
 */

exports.find = async (id) => {
  const type = await Type.findOne({ where: { id: id } });
  if (!type) {
    return null;
  }

  return type.toJSON();
};

/**
 * @summary Trouver toutes les types
 * @returns
 */

exports.findAll = async () => {
  const types = await Type.findAll();
  if (types) {
    return null;
  }
  return types.toJSON();
};

/**
 * @summary Créer une type
 * @returns
 */

exports.make = async (email) => {
  const type = await Type.create({
    email: email,
  });
  if (!type) {
    return null;
  }
  return type.toJSON();
};

/**
 * @summary Modifier les données d'une type
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer une type
 * @returns
 */

exports.delete = async () => {};
