import React from 'react'
import VideoCard from './VideoCard.js'
import '../stylesheet/video.css'

const Videos = ({videos}) => {
  return (
    <div className='videos'>
     {
       videos.map((item)=>{
        return <VideoCard key={item.name} name={item.name} image={item.image}/>
       }) 
     }
    </div>
  )
}

export default Videos