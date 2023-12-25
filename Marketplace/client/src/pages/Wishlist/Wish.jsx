import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Wish.css'; 

function Wish() {
  const [userProducts, setUserProducts] = useState([]);
  const id = Cookies.get('id');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/getAll/${id}`)
      .then((result) => setUserProducts(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wish-container">
      {userProducts.map((el, i) => (
        <Card key={i} className="wish-card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image={el.product.image[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.product.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Wish;
