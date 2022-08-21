import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheet/end.css'

const banner = ({end}) => {
  
    return (
        <div>
            <Carousel className='mb-5'>
    { end.map((element)=>{
      return  <Carousel.Item key={end.image} interval={2000}>
        <img
          className="d-block w-100 endimage"
          src={element.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{element.name}</h3>
          <p>{element.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      })
}
      </Carousel>
        </div>
    )
}

export default banner