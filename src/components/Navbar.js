import React from 'react'
import '../stylesheet/nav.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (
       <nav className='navbar'>
        <div className="logo">
            <div className='logodiv'>
        <Link to="fgj"> <img src={logo} alt="logo" className="logopng"/></Link>
        <Link to="/miphones" className="navlinks">Xiaomi Phones</Link>
        </div>
        <Link to="/redmiphones" className="navlinks">Redmi Phones</Link>
        <Link to="/tv" className="navlinks">TV</Link>
        <Link to="/laptops" className="navlinks">Laptops & Tablets</Link>
        <Link to="/fitness" className="navlinks">Fitness</Link>
        <Link to="/home" className="navlinks">Home</Link>
        <Link to="/audio" className="navlinks">Audio</Link>
        </div>  
        <div className='searchdiv '>
            <input  className='search' placeholder='Search Products'/>
            <FaSearch className="searchIcon" />
        </div>
           
        </nav>
    
  )
}

export default Navbar