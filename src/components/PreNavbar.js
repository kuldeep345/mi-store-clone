import React from 'react'
import '../stylesheet/PreNavbar.css'
import {CgShoppingCart} from 'react-icons/cg'


const PreNavbar = () => {
  return (
    <div className='prenav'>
        <div className='leftdiv'>
       <a href='https://www.mi.com/in/'>XIAOMI INDIA</a>
       <span className='dash'>|</span>
       <a href='https://in.event.mi.com/in/install-mi-store'>GET MI STORE APP</a>
       <span className='dash'>|</span>
       <a href='https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1'>ONLINE HELP</a>
       <span className='dash'>|</span>
       <a href='https://www.mi.com/in/service/authorized_stores/'>RETAIL STORE</a>
       </div>
       <div className='rightdiv'>
           <a href="https://account.xiaomi.com/fe/service/login">SIGN IN</a>
           <span className='dash'>|</span>
           <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN&source=&region=IN&sid=i18n_in_pc_pro&qs=callback%3Dhttps%253A%252F%252Fstore.mi.com">SIGN UP</a>
                <span className='dash'>|</span>
                
           <a className='' href="https://store.mi.com/in/cart"><CgShoppingCart className=''/>CART(0)</a>
       </div>
    </div>
  )
}

export default PreNavbar