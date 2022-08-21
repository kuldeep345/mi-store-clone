import React from 'react'
import Hotitemcard from './Hotitemcard'
import '../stylesheet/hotaccesseries.css'

const HotAccesseries = ({music, musicCover}) => {
  return (
    <div className='hotaccesseries'>
        <div className='musiccoverdiv'>
            <img src={musicCover} alt="cover"/>
        </div>
        <div className='accessorieslastdiv'>
            {
             music.map((item,index)=>{
         return <Hotitemcard key={item.image} image={item.image} price={item.price} name={item.name} index={index}/> 
             })     
            }
        </div>
    </div>
  )
}

export default HotAccesseries