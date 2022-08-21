import React from 'react'
import ProductReviewsCard from '../components/ProductReviewsCard'
import '../stylesheet/ProductReviews.css'


const ProductReviews = ({reviews}) => {
  return (
    <div className='productReview'>
        {reviews.map((item)=>{
          return  <ProductReviewsCard  key={item.price} image={item.image} review={item.review} name={item.name} price={item.price}/>
        })
    }
    </div>
  )
}

export default ProductReviews