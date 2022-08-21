import React from 'react'
import '../stylesheet/starProduct.css'

const StarProduct = ({starProduct}) => {
  return (
    <div className='starproduct'>
 <div><a href={starProduct[0].url}><img src={starProduct[0].image} alt="1st product"/></a></div>

 <div>
 <div style={{display:"flex"}}>
 <a href={starProduct[1].url}><img src={starProduct[1].image} alt="2st product"/></a>
 <a href={starProduct[2].url}><img src={starProduct[2].image} alt="3st product"/></a>
 </div>
 <a href={starProduct[3].url}><img className='fourthimage' src={starProduct[3].image} alt="4st product"/></a>
 </div>
    </div>
  )
}

export default StarProduct