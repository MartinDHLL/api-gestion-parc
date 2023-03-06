const statusMessages = require("../../assets/StatusMessages.json");
const tokenManagement = require("../../services/token.service");
const crud = require("../../database/crud/user.crud");

exports.getAccessToken = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.status(400).send(statusMessages[400]);
    return;
  }
  const user = await crud.find(null, email, password, true);
  if (!user) {
    res.status(401).send(statusMessages[401]);
    return;
  }
  const tokenResponse = await tokenManagement.generateToken(user);
  res
    .status(tokenResponse.statusCode)
    .send(tokenResponse.token ?? statusMessages[401]);
  return;
};
