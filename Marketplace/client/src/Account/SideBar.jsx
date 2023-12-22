// import "./NavBar.css";
import React from "react";
import "./side.css"


export default function SideBar() {
  return (
    <div className="side"> 
    <div className="manage-my-account">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist">My WishList</div>
      <div className="my-profile-parent">
        <div className="my-profile">My Profile</div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book">My Returns</div>
        <div className="address-book">My Cancellations</div>
      </div>
      
      </div>
  );
}
