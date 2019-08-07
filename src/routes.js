const express = require("express");

const routes = express.Router();
const DevController = require("./controllers/DevControllers");

routes.post("/dev", DevController.store);

module.exports = routes;
