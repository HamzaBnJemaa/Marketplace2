import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import { Link } from "react-router-dom";

function Products({ idCategorie }) {
  console.log(idCategorie);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/get/${idCategorie}`)
      .then((res) => {
        console.log("products", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idCategorie]);
  // products-container
  return (
    <div className="product-item">
      {products.map((product, i) => (
        <div className="products-container" key={i}>
          <img className="product-item img" src={product.image[0]} />
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
          <button>
            <Link to="/one" state={{one:product}}>One Product</Link>
          </button>
        </div>
      ))}
      <div>
        <button>
          <Link to="/create">Add Product</Link>
        </button>
      </div>
    </div>
  );
}

export default Products;
