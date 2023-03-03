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

const verifyToken = async () => {};

module.exports = { generateToken };
