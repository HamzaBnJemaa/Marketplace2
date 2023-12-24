import React, { useEffect ,useState} from 'react'
import Cookies from "js-cookie";
import axios from 'axios';
function Wish() {
const [userProducts,setUserProducts]= useState([])
const id= Cookies.get("id")

    useEffect(()=>{

 axios.get("http://localhost:3000/api/product/getAll/"+id)
 .then((result)=>setUserProducts(result.data))
 .catch((err)=>console.log(err))
    },[])
    console.log(id)
  return (
    <div>
        
     { userProducts.map((el,i)=>(
    <div>
          <h1>{el.product.name}</h1>
          <img src={el.product.image[0]} alt="" srcset="" />
    </div>
  ))}
    </div>
  )
}

export default Wish