import React from 'react'
import Offer from './Offer'
import '../stylesheet/offer.css'

const Offers = ({offers}) => {

   
  return (
    <div className='offersection'>
     {offers.map((item,index)=>{
     return <Offer key={item.url} src={item.image} index={index} link={item.url}/>
     })}
    </div>
  )
}

export default Offers