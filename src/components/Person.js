import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div>
      
    <div style={{color:"red"}} className='person'>
        <p>Name: {props.name}</p>
    </div>
    </div>
  )
}

export default Person