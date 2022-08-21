import React from 'react'
import {BsRecycle} from 'react-icons/bs'
import {AiOutlineDollar} from 'react-icons/ai'
import {FaMapMarkedAlt} from 'react-icons/fa'
import '../stylesheet/features.css'

const Features = () => {
  return (
    <div className='features'>

       <div className="article">
           <BsRecycle className="cycleIcon"/>
           <div className="featureText">
               <span className='featureHead'>Hassle-free replacement</span>
               <a href="https://www.mi.com/in/service/replacefaq" className='featurepara'>10-day easy replacement policy on mi.com</a>
           </div>
       </div>

       <div className="article">
           <AiOutlineDollar className="cycleIcon"/>
           <div className="featureText">
               <span className='featureHead'>100% secure payments</span>
               <a href="https://www.mi.com/in/service/replacefaq" className='featurepara'>
We support Cards, Wallets, EMI and COD</a>
           </div>
       </div>

       <div className="article">
           <FaMapMarkedAlt className="cycleIcon"/>
           <div className="featureText">
               <span className='featureHead'>Hassle-free replacement</span>
               <a href="https://www.mi.com/in/service/replacefaq" className='featurepara'>10-day easy replacement policy on mi.com</a>
           </div>
       </div>

       

    </div>
  )
}

export default Features