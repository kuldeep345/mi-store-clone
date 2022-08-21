import React from 'react'
import '../stylesheet/hotitemcard.css'

const Hotitemcard = ({image,price,name,index}) => {
  return (
    <div className='hotitemcard'>
     <img src={image} alt={`${index} product`}/>
     <h3>{name}</h3>
     <span>{price}</span>
         </div>
  )
}

export default Hotitemcard