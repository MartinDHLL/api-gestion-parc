const statusMessages = require("../../assets/StatusMessages.json");
const crud = require("../../database/crud/user.crud");

exports.getUser = async (req, res) => {
  const email = req.body.email;
  if (!email) {
    res.status(400).send(statusMessages[400]);
    return;
  }
  const user = await crud.find(email);
  if (!user) {
    res.status(401).send(statusMessages[401]);
    return;
  }
  const response = await tokenManagement.generateToken(user);
  res.status(response.statusCode).send(response.token ?? statusMessages[401]);
  return;
};
