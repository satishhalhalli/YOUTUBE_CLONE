// import React, { useEffect, useState } from 'react'
// import { YOUTUBE_VIDEOES_API } from '../utils/constants';
// import Videocard from './Videocard';
// import { Link } from 'react-router-dom';
// import Sidevideo from './Sidevideo';

// const SideVideos = () => {
    
//  const[videos, setVideoes] = useState([]);
//  useEffect(()=>{
//    getVideoes();
   
//  },[])

//  const getVideoes =async()=>{
//    const data=await fetch(YOUTUBE_VIDEOES_API);
//    const json=await data.json();
   
//     //console.log(json)
//     setVideoes(json.items);
// }
//   return (
//     <div className='w-full h-[600] m-2 p-2 '>
//       <div className='flex flex-wrap'>
//       {videos.map((video) => 
      
//       <Link  key={video.id} to={"/watch?v="+ video.id}> <Sidevideo  info={video} /> </Link>) }
       
//     </div>
//     </div>
//   )
// }

// export default SideVideos
import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOES_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import Sidevideo from './Sidevideo';

const SideVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOES_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className='w-full h-[600] m-2 p-2'>
      <div className='flex flex-wrap'>
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <Sidevideo info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideVideos;
