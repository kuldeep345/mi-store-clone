import React from 'react'
import '../stylesheet/ProductReviewsCard.css'

const ProductReviewsCard = ({image,review,name,price}) => {
  return (
    <div className='ProductReviewsCard'>
          <div className="picimage"><img src={image} alt='reviewimg'/></div>
          <div className='txt'>
            <h4>{review}</h4>
            <div>
                <span>{name}</span>
                <span>{price}</span>
            </div>
          </div>
    </div>
  )
}

export default ProductReviewsCard