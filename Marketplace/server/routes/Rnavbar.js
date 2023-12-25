const Route = require("express").Router();
const controller = require("../controllers/navbar");

Route.get("/bestprod",controller.getbyrate)
module.exports = Route;
