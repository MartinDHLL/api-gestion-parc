const router = require("express").Router();
const controllers = require("./auth.controllers");

/**
 * @summary Génère le token d'accès (AccessToken) puis le renvoie en réponse
 */

router.post("/accessToken", controllers.getAccessToken);

module.exports = router;
