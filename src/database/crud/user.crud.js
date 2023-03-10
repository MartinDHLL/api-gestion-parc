const User = require("../sequelize").models.user;
const bcrypt = require("bcrypt");

/**
 * @summary Trouver un utilisateur ou obtenir les informations d'accès d'un utilisateur,
 * @param {number} id null par défaut, identifiant de l'utilisateur
 * @param {string} email null par défaut, username de type email
 * @param {string} password null par défaut, sert pour l'authentification quand token = true
 * @param {boolean} usageToken true -> usage token, false -> récupérer les informations. false par défaut
 * @returns {JSON} un utilisateur
 */

exports.find = async (
  id = null,
  email = null,
  password = null,
  roles = null,
  usageToken = false
) => {
  const user = id
    ? await User.findByPk(id)
    : await User.findOne({ where: { username: email, roles: roles } });

  if (!user) return null;
  if (usageToken) {
    const passCheck = await bcrypt.compare(password, user.password);
    if (!passCheck) return null;
    // retourne les informations de l'utilisateur pour le token
    return { userId: user.id, username: user.username, roles: user.roles };
  }

  // retourne les informations de l'utilisateur pour une utilisation standard
  return {
    id: user.id,
    username: user.username,
    nom: user.nom,
    prenom: user.prenom,
    roles: user.roles,
  };
}; // ! fonction à refaire en plusieurs fonctions car trop compliqué à lire et à maintenir !

/**
 * @summary Trouver tous les utilisateurs selon des rôles
 * @param {array} roles définit les rôles lors de la recherche
 * @returns {JSON} un utilisateur
 */

exports.findAllByRole = async (roles) => {
  const users = await User.findAll({ where: { roles: roles } });
  if (users) return null;
  return users.toJSON();
};

/**
 * @summary Créer un utilisateur
 * @param {string} username adresse email de l'utilisateur
 * @param {string} password mot de passe de l'utilisateur
 * @returns {JSON} un utilisateur
 */

exports.make = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username: username,
    password: hashedPassword,
  });
  if (!user) return null;
  return user.toJSON();
};

/**
 * @summary Modifier les données d'un utilisateur
 * @param {array} roles définit les rôles lors de la recherche
 * @returns {JSON} un utilisateur
 */

exports.edit = async (id, data, roleAllowed) => {
  const user = await User.findByPk(id);
  if (!user || !user.includes(roleAllowed)) return null;
  user.update(data);
  return user.toJSON();
};

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
