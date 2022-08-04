import React from 'react'
import './css/ArrayContainer.css'

const ArrayContainer = ({array}) => {
  return (
    <div className="array-container">
    {array.map((val,ind)=>(
        <div className="array-bar" 
        key={ind}
        style={{height: `${val}px`}}>
        </div>  
    ))}
   </div>
  )
}

export default ArrayContainer