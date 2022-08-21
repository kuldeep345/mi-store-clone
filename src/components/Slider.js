import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';

const Slider = ({start}) => {
  return (
      <>
    <Navbar/>
    <Carousel fade>
        {start.map((item)=>{
      return <Carousel.Item key={item}>
      <img
      className="d-block w-100"
      src={item}
      alt="First slide"
      />
    </Carousel.Item>
    })}
</Carousel>
</>
  )

}

export default Slider