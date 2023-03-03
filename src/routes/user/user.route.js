const router = require("express").Router();
const controllers = require("./user.controllers");

router.get("/:id", controllers.getUser);
// router.get("/", controllers.getUsers);
// router.post("/", controllers.makeUser);

module.exports = router;
