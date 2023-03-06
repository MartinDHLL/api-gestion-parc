const User = require("../sequelize").models.user;
const bcrypt = require("bcrypt");

/**
 * @summary Trouver un utilisateur ou obtenir les informations d'accès d'un utilisateur,
 * @param {number} id null par défaut, identifiant de l'utilisateur
 * @param {string} email null par défaut, username de type email
 * @param {string} password null par défaut, sert pour l'authentification quand token = true
 * @param {boolean} usageToken true -> usage token, false -> récupérer les informations. false par défaut
 * @returns
 */

exports.find = async (
  id = null,
  email = null,
  password = null,
  usageToken = false
) => {
  const user = id
    ? await User.findByPk(id)
    : await User.findOne({ where: { username: email } });
  if (!user) {
    return null;
  }

  if (usageToken) {
    const passCheck = await bcrypt.compare(password, user.password);
    if (!passCheck) {
      return null;
    }
    // retourne les informations de l'utilisateur pour le token
    return { userId: user.id, username: user.username, roles: user.roles };
  }

  // retourne les informations de l'utilisateur
  return {
    id: user.id,
    username: user.username,
    nom: user.nom,
    prenom: user.prenom,
    roles: user.roles,
  };
};

/**
 * @summary Trouver tous les utilisateurs selon des rôles
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
 * @summary Créer un utilisateur
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.make = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username: username,
    password: hashedPassword,
  });
  if (!user) {
    return null;
  }
  return user.toJSON();
};

/**
 * @summary Modifier les données d'un utilisateur
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer un utilisateur
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.delete = async () => {};

/**
 * @summary Changer le mot de passe d'un utilisateur
 * @param {array} roles définit les rôles lors de la recherche
 * @returns
 */

exports.changePassword = async () => {};
