const { Router } = require("express");

const routes = Router();

const gamesRoute = require("../Routes/games.routes");

routes.use("/games", gamesRoute);

module.exports = routes