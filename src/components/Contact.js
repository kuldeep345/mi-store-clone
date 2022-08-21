import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import '../stylesheet/contact.css'
import {FaFacebookF,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contactleft'>
            <div className="leftcontact">
                <div className="contacthead">
                    <span>LET'S STAY IN TOUCH</span>             
                    <h6>Get updates on sales specials and more</h6>             
                </div>
                <div className='inputdiv'>
                     <div className="input">
                         <input placeholder='Enter Email Address' name='email'/>
                         <MdOutlineKeyboardArrowRight className='arrowicon'/>
                     </div>
                     <span>The email address is invalid</span>
                </div>
            </div>

        </div>

        <div className='contactleft'>
            <div className="leftcontact">
                <div className="contacthead">
                    <span>FOLLOW MI</span>             
                    <h6>We want to hear from you!</h6>             
                </div>
                <div className='iconsdiv'>
                        <FaFacebookF  className='brandIcon'/>
                        <FaYoutube  className='brandIcon'/>
                        <FaInstagram  className='brandIcon'/>
                        <FaTwitter  className='brandIcon'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact