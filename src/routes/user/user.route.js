const router = require("express").Router();
const controllers = require("./user.controllers");

// obtenir un utilisateur ainsi que ses informations avec un id
router.get("/:id", controllers.getUserById);

// obtenir les informations d'un utilisateur avec une recherche par email
router.get("/search/:email", controllers.getUserByEmail);

// obtenir la liste de tous les utilisateurs avec des rôles précis ainsi que leurs informations
router.get("/", controllers.getUsers);

router.post("/", controllers.makeUser);

module.exports = router;
