const express = require("express");
const authrout=require("./routes/Rauthentication")
const Product= require("../database-mysql");
// const translateRoute = require("./routes/Rbrowses");
const translateRoute2 = require("./routes/Rcategories");
const translateRoute3 =require("./routes/Rproduct")
const cookieparser=require("cookie-parser")
const cors = require("cors")
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(cookieparser())
// app.use("/api/browse",translateRoute)
app.use("/api/categories",translateRoute2)
app.use("/api/product",translateRoute3)
app.use("/api/market", authrout);

app.get('/get',(req,res)=>{
  res.send("hello")
})


app.post("/login",(req,res)=>{
  Product.User.create(req.body)
  .then((result)=>{
    res.send(result)
  }).catch((err)=>{
    console.log(err);
  })
})


app.listen(3000, () => {
  console.log(`listening on port ${PORT}`);
});

