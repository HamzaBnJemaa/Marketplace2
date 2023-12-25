import React, { useState } from "react";
import { BrowserRouter , Routes, Route, Outlet  } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
// import Categories from "./pages/categories/Categories.jsx";
import Products from "./pages/products/Products.jsx";
import Create from "./pages/Create/Create.jsx";
// import Onepage from "./pages/Onepage/Onepage.jsx";
import Official from "./Signup&Login/official";
import axios from "axios"
import Navbar from "./page_comp/navbar";
import Account from "./Account/Account.jsx";
import Footer from "./Footer/Footer.jsx";
import SideBar from "./Account/SideBar.jsx";
// import Error from "./error/Error.jsx"
import WishList from "./wishList/WishList.jsx"
import './App.css';
import Admin from "./admin/Admin.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import About from "./pages/About/About.jsx";
import Cart from "./pages/Cart/Cart.jsx";
// import Not from "./pages/NotFound/Not.jsx";
import Wish from "./pages/Wishlist/Wish.jsx";
import Add from "./pages/Add categories/Add.jsx";
import Contact from "./contact/Contact.jsx";
import Error from "../src/error/Error.jsx"


function App() {



  const [idCategorie,setCategorie]=useState(0)
  console.log(idCategorie);

const [refresh,setRefresh]=useState(false)


axios.defaults.withCredentials=true


  return (
    <div>
      <BrowserRouter>

      {/* <Navbar/> */}

        <Routes>
          <Route path="/" element={<Official/>}></Route>
          <Route path="/home" element={<Home setRefresh={setRefresh} refresh={refresh} setCategorie={setCategorie}/>}></Route>
          {/* <Route path="/categories" element={<Categories setCategorie={setCategorie} />} ></Route> */}
          <Route path="/products" element={<Products idCategorie={idCategorie} />}></Route> 
          <Route path="/create" element={<Create />}></Route>
         <Route path="/add" element={<Add />}></Route>
          <Route path ="/sideBar" element={<SideBar/>} />
         <Route path="/account" element={<Account/>} /> 
         <Route path="/About" element={<About />}></Route>
          <Route path="/one" element={<Products/>}> </Route>
          <Route path="/admin" element={<Admin/>} ></Route>
          <Route path="/card" element={<Cart/>}> </Route>
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
          <Route path="/contact" element={<Contact />} />
           <Route path="/error" element={<Error/>}></Route>
          <Route path="/Wish" element={<Wish/>}></Route>
          {/* <Route path="*" element={<Not />} /> */}
        </Routes>
        <div className="footer-div">
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;