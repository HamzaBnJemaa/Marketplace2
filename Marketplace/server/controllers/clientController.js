const Client = require("../database-mysql")


module.exports = {
getAllclients : async(req,res)=>{
    try {
        const response = await Client.findAll()
        res.status(200).send(response)
    } catch (error) {
        throw error
    }
}, 

getByEmail : async (req,res)=>{
    try {
        const response = await Client.findAll({where:{email:req.params.email}})
        res.status(200).send(response)
    } catch (error) {
        throw error
    }
},
updateClient : async (req,res)=>{
    try { 
       const result = await Product.update(req.body, {where:{id:req.params.idu}})
       res.json(result)
    } catch (error) {
       throw error
    }
   },
}