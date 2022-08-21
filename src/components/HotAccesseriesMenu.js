import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/HotAccesseriesmenu.css'

const HotAccesseriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
   
      <Link to="/music" className="hotlink">Music Store</Link> 
      <Link to="/smartDevices" className="hotlink">Smart Devices</Link> 
      <Link to="/home" className="hotlink">Home</Link> 
      <Link to="/lifestyle" className="hotlink">Lifestyle</Link> 
      <Link to="/mobileAccessories" className="hotlink">Mobile Accessories</Link> 
  

    </div>
  )
}

export default HotAccesseriesMenu