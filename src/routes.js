const express = require("express");

const routes = express.Router();
const DevController = require("./controllers/DevControllers");
const LikeController = require("./controllers/LikeControllers");
const DislikeController = require("./controllers/DislikeControllers");

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
