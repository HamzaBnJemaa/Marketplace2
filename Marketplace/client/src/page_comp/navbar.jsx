import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import Search from '../pages/Search/Search';
import axios from 'axios';

function Navbar() {
  const [product, setProduct] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const location = useLocation();


    const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry Men', year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: 'Pulp Fiction', year: 1994 },
    ];



  return (
    <div>
      <nav>
        <p className='nav_mess'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className='link_nav' >ShopNow</a> </p>
      </nav>
      <header>
        <div>
          <h1 className='title_nav'>MarketPlace</h1>
        </div>
        <div className='div1_nav'>
          <ul className='ul_nav'>
            <li><Link to='/home'>Home</Link></li>
            <li>Contact</li>
            <li><Link to="/create">Create</Link></li>
            <li> <Link to="/About">About Us</Link></li>
            <li><Search /></li>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/Account" ? "active" : ""
                }`}
                to="/account"
              >
                Account
              </Link>
              <li><Link to="/add">Add</Link></li>
            </li>
          </ul>
        </div>
        <div className='div2_nav'>
          <Stack spacing={2} sx={{ width: 300 }} className='stack_nav'>
            <Autocomplete
              className='search_nav'
              id="free-solo-demo"
              freeSolo
              options={product.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='What are you looking for?'
                />
              )}
            />
            <button className='search_icon'><SearchIcon /></button>
          </Stack>
          <div className='icons_nav'>
            <button className='nav_icons'>
              <Badge badgeContent={userProducts.length} color='error'>
                <Link to='/wish'>
                  <FavoriteBorderIcon />
                </Link>
              </Badge>
            </button>
            <button className='nav_icons'>
              <Badge color='error' variant='dot'>
                <ShoppingCartCheckoutIcon />
              </Badge>
            </button>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Navbar;
