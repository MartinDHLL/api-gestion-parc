const router = require("express").Router();
const controllers = require("./auth.controllers");

/**
 * @summary Génère le token d'accès (AccessToken)
 */

router.post("/", controllers.getAccessToken);

module.exports = router;
