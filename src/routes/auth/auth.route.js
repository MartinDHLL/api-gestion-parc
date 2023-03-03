const router = require("express").Router();
const controllers = require("./auth.controllers");

router.post("/token", controllers.getAccessToken);

module.exports = router;
