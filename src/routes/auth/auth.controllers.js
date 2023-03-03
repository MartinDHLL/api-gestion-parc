const statusMessages = require("../../assets/StatusMessages.json");
const tokenManagement = require("../../services/token.service");
const crud = require("../../database/crud/user.crud");

exports.getAccessToken = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!username || !password) {
    res.status(400).send(statusMessages[400]);
    return;
  }
  const user = await crud.find(email, password, true);
  if (!user) {
    res.status(401).send(statusMessages[401]);
    return;
  }
  const response = await tokenManagement.generateToken(user);
  res.status(response.statusCode).send(response.token ?? statusMessages[401]);
  return;
};
