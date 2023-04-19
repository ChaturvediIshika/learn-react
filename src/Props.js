import React from 'react'

const Props = (props) => {
  return (
    <div>
        <p>Name:{props.name}</p>
        {props.children}
    </div>
  )
}

export default Props