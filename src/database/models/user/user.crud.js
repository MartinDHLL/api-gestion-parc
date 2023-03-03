const User = require("../../sequelize").models.user;
const bcrypt = require("bcrypt");

/**
 * @summary Cette fonction permet de trouver un utilisateur,
 * @param {string} email username de type email
 * @param {string} password null par défaut, sert pour l'authentification quand token = true
 * @param {boolean} token true -> usage token, false -> récupérer les informations. false par défaut
 * @returns
 */

exports.find = async (email, password = null, token = false) => {
  const user = await User.findOne({ where: { username: email } });
  if (!user) {
    return null;
  }

  if (token) {
    const passCheck = await bcrypt.compare(password, user.password);
    if (!passCheck) {
      return null;
    }
  }

  return token
    ? { userId: user.id, username: user.username, roles: user.roles }
    : {
        id: user.id,
        username: user.username,
        nom: user.nom,
        prenom: user.prenom,
        roles: user.roles,
      };
};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.findAllByRole = async (roles) => {
  const users = await User.findAll({ where: { roles: roles } });
  if (users) {
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
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username: username,
    password: hashedPassword,
  });
  return user.toJSON();
};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.delete = async () => {};

/**
 * @summary Cette fonction permet de trouver tous les utilisateurs selon les rôles donné
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.changePassword = async () => {};
