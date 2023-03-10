const statusMessages = require("../../assets/StatusMessages.json");
const tokenManagement = require("../../services/token.service");
const crud = require("../../database/crud/user.crud");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns succeeded : access token, failed : error message
 */

exports.getAccessToken = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) return res.status(400).send(statusMessages[400]);

  const user = await crud.find(null, email, password, true);

  if (!user) return res.status(401).send(statusMessages[401]);

  const tokenResponse = await tokenManagement.generateToken(user);
  return res
    .status(tokenResponse.statusCode)
    .send(tokenResponse.token ?? statusMessages[401]);
};
