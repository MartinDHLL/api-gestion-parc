const Entreprise = require("../../sequelize").models.entreprise;

/**
 * @summary Cette fonction permet de trouver une entreprise,
 * @param {string} email username de type email
 * @param {string} password null par défaut, sert pour l'authentification quand token = true
 * @param {boolean} token true -> usage token, false -> récupérer les informations. false par défaut
 * @returns
 */

exports.find = async (email) => {
  const entreprise = await Entreprise.findOne({ where: { username: email } });
  if (!entreprise) {
    return null;
  }

  return {
    id: type.id,
  };
};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.findAll = async () => {
  const entreprises = await Entreprise.findAll({ where: { roles: roles } });
  if (!entreprises) {
    return null;
  }
  return users.toJSON();
};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.make = async (username, password) => {
  const type = await Entreprise.create({
    username: username,
  });
  return user.toJSON();
};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.edit = async();

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.delete = async();

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.changePassword = async();
