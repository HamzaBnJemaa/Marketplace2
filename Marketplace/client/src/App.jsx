import React, { useState } from "react";
import { BrowserRouter , Routes, Route, Outlet  } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Categories from "./pages/categories/Categories.jsx";
import Products from "./pages/products/Products.jsx";
import Create from "./pages/Create/Create.jsx";
import Onepage from "./pages/Onepage/Onepage.jsx";
import Official from "./Signup&Login/official";
import axios from "axios"
import Navbar from "./page_comp/navbar";
import Account from "./Account/Account.jsx";
import Footer from "./Footer/Footer.jsx";
import SideBar from "./Account/SideBar.jsx";
import Error from "./error/Error.jsx"
import WishList from "./wishList/WishList.jsx"
import './App.css';
import Admin from "./admin/Admin.jsx";
import Dashboard from "./admin/Dashboard.jsx";

function App() {
const [idCategorie,setCategorie]=useState(0)
axios.defaults.withCredentials=true

  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Outlet/>
      
        <Routes>
           <Route path="/" element={<Official/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/categories" element={<Categories setCategorie={setCategorie} />} ></Route>
          <Route path="/products" element={<Products idCategorie={idCategorie} />}></Route> 
          <Route path="/create" element={<Create />}></Route>
          <Route path="/one" element={<Onepage/>}> </Route>
          <Route path ="/sideBar" element={<SideBar/>} />
         <Route path="/account" element={<Account/>} /> 
         <Route path="*" element={<Error />} />
         <Route path="/wishlist" element={<WishList />} />

          
         
          <Route path="/one" element={<Products/>}> </Route> 
          <Route path="/admin" element={<Admin/>} ></Route>
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;