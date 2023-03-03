const router = require("express").Router();
const controllers = require("./auth.controllers");

router.post("/", controllers.getAccessToken);

module.exports = router;
