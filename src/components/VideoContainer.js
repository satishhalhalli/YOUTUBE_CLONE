import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOES_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const VideoContainer = () => {

 const[videos, setVideoes] = useState([]);
  useEffect(()=>{
    getVideoes();
    
  },[])

  const getVideoes =async()=>{
    const data=await fetch(YOUTUBE_VIDEOES_API);
    const json=await data.json();
    
     //console.log(json)
     setVideoes(json.items);
}

  return (videos.length === 0) ? <Shimmer/> : (
    <div className='flex flex-wrap'>
      {videos.map((video) => 
      
      <Link  key={video.id} to={"/watch?v="+ video.id}> <Videocard  info={video} /> </Link>) }
       
    </div>
  )
}

export default VideoContainer
