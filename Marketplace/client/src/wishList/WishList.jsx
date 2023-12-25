import "./wishList.css";
import React from "react";
import Products from "../pages/products/Products";

function WishList({data}) {

//   const filteredProducts = data.filter((product) => product.categoryId === 5);

  return (
    <div className="main_container">
      <div className="wishList">
        <div className="wishList_container">
          <div className="btns">
            <p>Wishlist (4)</p>
            <button>Move All To Bag</button>
          </div>
          {/* <div className="productCards">
            {filteredProducts.map(product => {
              return (
                <Products product={product} />
              )
            })}

          </div> */}
        </div>
        <div className="JustForYou">
          <div className="JustForYou_btns">
            <div className="title">
              <div className="red"></div>
              <p>Just For You</p>
            </div>
            <button>See All</button>
          </div>
          {/* <div className="suggestion">
          {filteredProducts.map(product => {
              return (
                <Product product={product} />
              )
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WishList;
