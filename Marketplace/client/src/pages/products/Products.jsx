import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';

function Products({ idCategorie }) {
  console.log(idCategorie);
  const [products, setProducts] = useState([]);
  const[data,setData]=useState([])

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

  const oneproduct=(idp)=>{
    axios
    .get(`http://localhost:3000/api/Oneproduct/getOne/${idp}`)

          .then((result) => {setData(result.data)
            console.log("here",result.data);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  return (
    <div className="product-item">
      {products.map((product, i) => (
        <div className="products-container" key={i}>
          <img className="product-item img" src={product.image[0]} />
          <div>
            <h1>{product.name}</h1>
            <h4>Prix : {product.price} TND</h4>
        
          <button className='nav_icons'>
    <Badge color="error" variant="dot">
    <Link to="/card" state={{one:product}}><ShoppingCartCheckoutIcon/></Link>
    </Badge>
    </button >
          </div>
        <p><Link to="/one" state={{one:product}}>Show more</Link></p>
        
         
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