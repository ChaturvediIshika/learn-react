import React,{useState} from 'react'

const Product = (pro) => {

    const [price,setPrice]=useState(pro.price);
    const [count,setCount]=useState(1);

    // let price=pro.price;
    const priceChange=()=>{
        setPrice(800);
        setCount(count+1);
        // console.log(price);
    }
  return (
    <div onClick={priceChange} style={{width:"300px",border:"2px solid black",margin:"20px",padding:"20px"}}>
        <img style={{width:"100%"}} src={pro.image}></img>
        <h1>Name:{pro.name}</h1>
        <h5>Price:{price}</h5>
        <h6>{count}</h6>
    </div>
  )
}

export default Product