const Route = require("express").Router();
const controller = require("../controllers/Adminrols");
const { route } = require("./Rauthentication");

Route.get("/clients",controller.getclients)
Route.get("/sellers",controller.getsellers)
Route.get("/categorys",controller.getAllCateg)
Route.get("/products",controller.getAllProduct)
Route.delete("/deletecat",controller.deleteProduct)
Route.delete("/deletecateg",controller.removegcateg)
Route.put("/updatecat",controller.updatecateg)
Route.post("/creatcat",controller.createcat)

module.exports=Route