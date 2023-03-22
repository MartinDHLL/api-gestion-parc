const Hardware = require("../sequelize").models.hardware;

/**
 * @summary Trouver une hardware,
 * @returns
 */

exports.find = async (id) => {
  const hardware = await Hardware.findOne({ where: { id: id } });
  if (!hardware) {
    return null;
  }

  return hardware.toJSON();
};

/**
 * @summary Trouver toutes les hardwares
 * @returns
 */

exports.findAll = async () => {
  const hardwares = await Hardware.findAll();
  if (hardwares) {
    return null;
  }
  return hardwares.toJSON();
};

/**
 * @summary Créer une hardware
 * @returns
 */

exports.make = async (info) => {
  const hardware = await Hardware.create(info);
  if (!hardware) {
    return null;
  }
  return hardware.toJSON();
};

/**
 * @summary Modifier les données d'une hardware
 * @returns
 */

exports.edit = async (id, info) => {
  const hardware = await Hardware.update(info, {
    where: {id},
  });
  if(!hardware){
    return null;
  }
  return hardware.toJSON();
};

/**
 * @summary Supprimer une hardware
 * @returns
 */

exports.delete = async (id) => {
  const hardware = await Hardware.destroy({
    where: {id},
  });
  if (!hardware) {
    return null;
  }
  return hardware.toJSON();
};
