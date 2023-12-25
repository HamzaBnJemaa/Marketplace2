import React, { useEffect, useState } from 'react';
import Categories from '../categories/Categories';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Rating } from '@mui/material';
import axios from 'axios';
import './For.css';
import Nouv from '../Nouveau/Nouv';
import Bas from '../Bas/Bas';

function Home({ setRefresh, refresh, setCategorie }) {
  const [allProducts, setAllProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/product/get')
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowAllProducts = () => {
    setShowAllProducts(true);
  };

  let displayedProducts;

  if (showAllProducts) {
    displayedProducts = allProducts;
  } else {
    displayedProducts = allProducts.slice(0, 5);
  }

  return (
    <div className="home-container">
      <h1 id="title" className="titles">Bienvenue sur notre site de vente en ligne !</h1>
      <div className='slide-container'>
  <Nouv />
</div>

      <div className="container">
        <h2 className='cont-h2'>Browse By Category</h2>
        <Box sx={{ width: '80%', flexBasis: '70%' }}>
          <Categories setRefresh={setRefresh} refresh={refresh} setCategorie={setCategorie} />
        </Box>
      </div>
      <div>
        <h1 className='Cont-h1'>Explore Our Products</h1>
        <div className='button-1'></div>
        <Box className="image-box-container">
          {displayedProducts.map((el, i) => (
            <div key={i} className="image-box">
              <img className="product-image" src={el.image[0]} />
              <h4> {el.newprice} TND</h4>
              <Rating name="read-only" value={el.rate} readOnly />
              <Paper elevation={3} className="image-paper" />
            </div>
          ))}
        </Box>
        <div className='button-2'>
          <RemoveRedEyeIcon onClick={handleShowAllProducts} />
        </div>
      </div>
      <div>
          <Bas />
      </div>
    </div>
  );
}

export default Home;
