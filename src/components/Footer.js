import React from 'react'
import '../stylesheet/footer.css'

const Footer = ({support,shop,store, about,contact}) => {
  return (
    <div className='footer'>
       <div>
           <p>SUPPORT</p>
           {support.map((item, index)=>{
             return  <a key={item.url} href={item.url}>{item.name}</a>
             })
           }
       </div>

       <div>
           <p>SHOP AND LEARN</p>
           {shop.map((item, index)=>{
             return  <a key={item.url} href={item.url}>{item.name}</a>
             })
           }
       </div>

       <div>
           <p>RETAIL STORE</p>
           {store.map((item, index)=>{
             return  <a key={item.url} href={item.url}>{item.name}</a>
             })
           }
       </div>

       <div>
           <p>ABOUT US</p>
           {about.map((item, index)=>{
             return  <a key={item.url} href={item.url}>{item.name}</a>
             })
           }
       </div>

       <div>
           <p>ABOUT US</p>
           {about.map((item, index)=>{
             return  <a key={item.url} href={item.url}>{item.name}</a>
             })
           }
       </div>

       <div>
           <p>CONTACT US</p>
           {contact.map((item, index)=>{
             return  <a key={item.url} href={item.url}>{item.name}</a>
             })
           }
       </div>


    </div>
  )
}

export default Footer