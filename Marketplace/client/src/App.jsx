import React, { useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Categories from "./pages/categories/Categories.jsx";
import Products from "./pages/products/Products.jsx";
import Create from "./pages/Create/Create.jsx";
// import Onepage from "./pages/Onepage/Onepage.jsx";
import Official from "./Signup&Login/official";
import axios from "axios"
import Navbar from "./page_comp/navbar";
import Add from "./pages/Add categories/Add.jsx";
import Product from "./oneprod/Product.jsx"
import './App.css';





function App() {



  const [idCategorie,setCategorie]=useState(0)
  console.log(idCategorie);

const [refresh,setRefresh]=useState(false)


axios.defaults.withCredentials=true

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Official/>}></Route>
          <Route path="/home" element={<Home setRefresh={setRefresh} refresh={refresh} setCategorie={setCategorie}/>}></Route>
          <Route path="/add" element={<Add  />} />
          {/* <Route path="/categories" element={<Categories setRefresh={setRefresh} refresh={refresh} setCategorie={setCategorie} />} ></Route> */}
          <Route path="/products" element={<Products idCategorie={idCategorie} />}></Route> 
          <Route path="/create" element={<Create />}></Route>
          
          <Route path="/one" element={<Product/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;