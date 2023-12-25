import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Search.css"

function Search() {
  const [item, setItem] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    axios.get(`http://localhost:3000/api/Oneproduct/get/${item}`)
      .then((result) => {
        console.log("Search result:", result.data);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button onClick={handleSearch}><Link to="/search">Search</Link></button>

      <div className="search-results">
        {products.map((product) => (
          <div key={product.id} className="product-search">
            <h3>{product.name}</h3>
            <img src={product.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
