import React from 'react'
import '../stylesheet/videocard.css'
import {BsPlayCircle} from 'react-icons/bs'

const VideoCard = ({name,image}) => {
  
  return (
    <div >
        <div className='videocard' style={{backgroundImage:`url(${image})`}}>
          <div className='d-flex flex-column justify-content-center align-items-center'> 
           <BsPlayCircle className='playicon'/>
          <span className='text-white'>{name}</span>
          </div>

        </div>
    </div>
  )
}

export default VideoCard