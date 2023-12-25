const {User,Product} = require ('../../database-mysql/index');
const { Op } = require('sequelize');


let getbyrate =async(req,res)=>{
    try{
        const topprod=await Product.findAll({
            where: {
            rate: {
              [Op.between]: [3, 5]
            }
          }})
          res.json(topprod)
    }
    catch (err) {
        console.log(err);
    }
}
module.exports={getbyrate}
