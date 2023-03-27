const { config } = require("../configs/app.config");
const jwt = require("jsonwebtoken");
const token = { token: null, statusCode: 401 };

/**
 *
 * @param {*} user Utilisateur à encoder dans le payload du token
 * @returns Objet JSON contenant un token et un statut
 */

const generateToken = async (user, duration) => {
  if (!user) {
    return token;
  }
  token.token = await jwt.sign(user, config.secret, {
    expiresIn: duration,
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
const verifyRefreshToken = async (oldToken, user) => {
  if (!oldToken || !jwt.verify(oldToken, config.secret)) {
    return token;
  }
  return (token.token = generateToken(user, 24));
};

const verifyAccessToken = async (accessToken, user) => {
  if (!accessToken || !jwt.verify(accessToken, config.secret)) {
    return token;
  }
  return true;
};

module.exports = { generateToken, verifyRefreshToken, verifyAccessToken };
