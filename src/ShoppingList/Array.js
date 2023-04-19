import React from 'react'
import Product from './Product';
import form from './form';

const arr=[{
    name:'Cycle',
    price:700,
    image:"https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},{
    name:'MotorCycle',
    price:700,
    image:"https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},{
    name:'CycleStand',
    price:700,
    image:"https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}];

const Array = () => {
  return (
    
    <div>
        <form />
        {/* <div>
        {
            arr.map((a)=>{
            return <Product name={a.name} price={a.price} image={a.image} />
            })
        }
        </div> */}
    </div>
  )
}

export default Array