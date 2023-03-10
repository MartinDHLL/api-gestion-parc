const statusMessages = require("../../assets/StatusMessages.json");
const crud = require("../../database/crud/user.crud");

exports.getUserById = async (req, res) => {
  const id = req.body.id;
  const roles = req.body.roles;

  if (!id) return res.status(400).send(statusMessages[400]);
  const user = await crud.find(id, null, null, roles);
  if (!user) return res.status(401).send(statusMessages[401]);

  /* return res
    .status(response.statusCode)
    .send(response.token ?? statusMessages[401]); */
};

exports.getUserByEmail = async (req, res) => {
  const email = req.body.email;
  const roles = req.body.roles;

  if (!email) return res.status(400).send(statusMessages[400]);
  const user = await crud.find(null, email, null, roles);
  if (!user) return res.status(401).send(statusMessages[401]);

  /* return res
    .status(response.statusCode)
    .send(response.token ?? statusMessages[401]); */
};
