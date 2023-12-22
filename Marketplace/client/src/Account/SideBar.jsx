// import "./NavBar.css";
import React from "react";
import "./side.css"
import Create from "../pages/Create/Create.jsx"
import { Link, Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side"> 
    <div className="manage-my-account">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist">My WishList</div>
      <div className="my-profile-parent">
        <div className="my-profile"><Link
                className={`link ${
                  location.pathname === "/account" ? "active" : ""
                }`}
                to="/account"
              >
                My Profile
              </Link></div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book" ><Link
                className={`link ${
                  location.pathname === "/create" ? "active" : ""
                }`}
                to="/create"
              >
                My returns
              </Link> </div>
              
        <div className="address-book">My Cancellations</div>
      </div>
      
      </div>
  );
}
