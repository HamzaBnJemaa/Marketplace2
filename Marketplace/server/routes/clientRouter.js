const express = require("express")
const clientRouter = express.Router()
const  {getAllclients,getByEmail,updateClient} = require("../controllers/clientController.js") 

clientRouter.get("/getAllClient",getAllclients)
clientRouter.get("/getEmail/:email",getByEmail)
clientRouter.patch("/update",updateClient)

module.exports = clientRouter;