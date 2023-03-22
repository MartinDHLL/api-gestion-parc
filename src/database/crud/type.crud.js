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

exports.make = async (info) => {
  const type = await Type.create(info);
  if (!type) {
    return null;
  }
  return type.toJSON();
};

/**
 * @summary Modifier les données d'une type
 * @returns
 */

exports.edit = async (id, info) => {
  const type = await Type.update(info, {
    where: {id},
  });
  if (!type) {
    return null;
  }
  return type.toJSON();
};

/**
 * @summary Supprimer une type
 * @returns
 */

exports.delete = async (id) => {
  const type = await Type.destroy({
    where: {id},
  });
  if (!type) {
    return null;
  }
  return type.toJSON();
};
