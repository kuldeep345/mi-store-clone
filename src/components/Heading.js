import React from 'react'
import '../stylesheet/heading.css'

const Heading = ({text}) => {
  return (
    <section className='heading'>
    <div className='font-line'></div>
      <span className='text'>{text}</span>
    <div className='font-line'></div>
    
    </section>

  )
}

export default Heading