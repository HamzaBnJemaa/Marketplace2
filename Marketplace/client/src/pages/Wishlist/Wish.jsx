import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { CardActionArea } from '@mui/material';
import './Wish.css'; 

function Wish() {
  const [refresh,setRefresh]=useState(false)
  const [userProducts, setUserProducts] = useState([]);
  const id = Cookies.get('id');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/getAll/${id}`)
      .then((result) => {setUserProducts(result.data)
      console.log(result.data)})
      .catch((err) => console.log(err));
  }, [refresh]);

  const HandleDelete=(idsave)=>{
    axios.delete(`http://localhost:3000/api/product/delFav/${idsave}`)
    .then((res)=>{
     setRefresh(!refresh)
    }).catch((err)=>{
      console.log(err);
    })
  }
  



  return (
    <div className="wish-container">
      {userProducts.map((el, i) => (
      <div key={i}>
        <Card className="wish-card">
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
<div className='flous'>

               <h4 className='price1'>${el.product.newprice}</h4>
               <h4 className='price2'>${el.product.lastprice}</h4>
           </div>
           <Rating name="read-only" value={el.product.rate} readOnly />
        </Card>


<button className='delete-button1' onClick={()=>HandleDelete(el.idsave)}>Delete</button>

</div>
    
   
      ))}
    </div>
  );
}

export default Wish;
