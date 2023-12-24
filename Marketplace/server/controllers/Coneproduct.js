// require your Model phrase here
const { Product } = require('../../database-mysql/index');
const db=require("../../database-mysql")

module.exports.getAllProduct =(req, res) => {
 db.Product.findAll().then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
};

module.exports.getOneProduct =(req, res) => {
  db.Product.findAll({where:{id:req.params.id}}).then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
};


module.exports.createProduct = (req, res) => {
    db.Product.create(req.body)
    .then((result)=>
    {res.json(result)})
    .catch((err)=>{console.log(err)})
};

module.exports.deleteProduct = (req, res) => {
  db.Product.destroy({where:{id:req.params.id}}).then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
};

