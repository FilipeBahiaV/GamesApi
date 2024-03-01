const {Router} = require("express");
const GamesController = require('../Controllers/gamesControllers')

const routes = Router();

const gamesController = new GamesController()

    routes.post("/", (gamesController.create))
    routes.put("/:id", (gamesController.update))
    routes.delete("/:id", (gamesController.delete))
    routes.get("/:id", (gamesController.show))

module.exports = routes;