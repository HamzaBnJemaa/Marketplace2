const config =require("./config")

const { Sequelize, DataTypes } = require("sequelize");



const connection = new Sequelize(
  "marketplace",
  "root",
  "407000",
  {
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: false,
    }
  }
);


// Define the Category model
const Category = connection.define('Categorys', {
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define the User model
const User = connection.define('users', {
  idu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rols: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Define the Product model
const Product = connection.define('products', {
  idp:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  lastprice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  newprice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sellername: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define the Save model
const Save = connection.define('Save', {});

// Set up associations
Category.hasMany(Product, { foreignKey: 'categorys_idcat' });
Product.belongsTo(Category, { foreignKey: 'categorys_idcat' });

User.hasMany(Product, { foreignKey: 'users_idu' });
Product.belongsTo(User, { foreignKey: 'users_idu' });

User.hasMany(Save, { foreignKey: 'users_idu' });
Save.belongsTo(User, { foreignKey: 'users_idu' });

Product.hasMany(Save, { foreignKey: 'product_idp' });
Save.belongsTo(Product, { foreignKey: 'product_idp' });


connection.authenticate()
.then(()=>console.log("db connected"))
.catch((err)=>console.log("db didnt connect",err)) 
 



// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("db created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create db : ", error);
//   });






module.exports = {User,Save,Product,Category}
