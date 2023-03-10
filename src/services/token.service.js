const { config } = require("../configs/app.config");
const jwt = require("jsonwebtoken");
const token = { token: null, statusCode: 401 };

/**
 *
 * @param {*} user Utilisateur à encoder dans le payload du token
 * @returns Objet JSON contenant un token et un statut
 */

const generateToken = async (user) => {
  if (!user) {
    return token;
  }
  token.token = await jwt.sign(user, config.secret, {
    expiresIn: "24h",
  });
  token.statusCode = 201;
  return token;
};

/**
 *
 * @param {*} user Verifie le token et en renvoie un nouveau si le token est correct
 * @returns Objet JSON contenant un token et un statut
 */

// à finir
const verifyToken = async (oldToken, user) => {
  if (!token || !jwt.verify(oldToken, config.secret)) {
    return token;
  }
  return (token.token = generateToken(user));
};

module.exports = { generateToken };
