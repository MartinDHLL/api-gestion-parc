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

exports.make = async (email) => {
  const hardware = await Hardware.create({
    email: email,
  });
  if (!hardware) {
    return null;
  }
  return hardware.toJSON();
};

/**
 * @summary Modifier les données d'une hardware
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer une hardware
 * @returns
 */

exports.delete = async () => {};
