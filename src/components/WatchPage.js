// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { closemenu } from '../utils/appSlice';
// import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
// import SideVideos from './SideVideos';
// const WatchPage = () => {
//    const [searchparams] = useSearchParams();
//    console.log(searchparams.get("v"))
//     const dispatch = useDispatch();
//     useEffect(()=>{
//       dispatch(closemenu());
//     },[])
//   return (
//     <div className='flex-col w-full '>
//     <div className='px-5 flex w-full'>
//       <diV>
//     <iframe width="900" height="450" 
//     src={"https://www.youtube.com/embed/"+ searchparams.get("v")}
//     title="YouTube video player" frameborder="0" 
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//     allowFullScreen></iframe>
//     </diV>

//     <div className='w-full'>
//       <SideVideos/>
//     </div>
//     </div>
    

//     <Comments/>
//     </div>
//   )
// }

// export default WatchPage

// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { closemenu } from '../utils/appSlice';
// import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
// import SideVideos from './SideVideos';

// const WatchPage = () => {
//   const [searchparams] = useSearchParams();
//   console.log(searchparams.get("v"));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(closemenu());
//   }, []);

//   return (
//     <div className='flexflex-col w-full'>
//       <div className='px-5 flex w-full'>
//         <div>
//           <iframe
//             width="900"
//             height="450"
//             src={"https://www.youtube.com/embed/" + searchparams.get("v")}
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </div>

//         <div className='w-full flex flex-wrap'>
//           <SideVideos />
//         </div>
//       </div>

//       <div className='px-5 w-1/2'>
//         <Comments />
//       </div>
//     </div>
//   );
// };

// export default WatchPage;
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { closemenu } from '../utils/appSlice';
// import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
// import SideVideos from './SideVideos';

// const WatchPage = () => {
//   const [searchparams] = useSearchParams();
//   console.log(searchparams.get("v"));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(closemenu());
//   }, []);

//   return (
//     <div className='flex-col w-full'>
//       <div className='px-5'>
//         <iframe
//           width="900"
//           height="450"
//           src={"https://www.youtube.com/embed/" + searchparams.get("v")}
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//       </div>

//       <div className='flex px-5'>
//         <div className='w-1/4 pr-4'>
//           <SideVideos />
//         </div>
//         <div className='w-3/4'>
//           <div className='w-full'>
//             <Comments />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchPage;
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { closemenu } from '../utils/appSlice';
// import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
// import SideVideos from './SideVideos';

// const WatchPage = () => {
//   const [searchparams] = useSearchParams();
//   console.log(searchparams.get("v"));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(closemenu());
//   }, []);

//   return (
//     <div>
//     <div className='flex-col w-full'>
//       <div className='px-5'>
//         <iframe
//           width="900"
//           height="450"
//           src={"https://www.youtube.com/embed/" + searchparams.get("v")}
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
         

//         ></iframe>
//       </div>

//       <div className='px-5 flex'>
//         <div className='w-3/4 pr-4'>
//           <div className='w-full'>
//             <Comments />
//           </div>
//         </div>
        
//       </div>
//     </div>

//     <div className='w-1/4'>
//           <SideVideos />
//         </div>
//         </div>
//   );
// };

// export default WatchPage;

// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { closemenu } from '../utils/appSlice';
// import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
// import SideVideos from './SideVideos';
// import Button from './Button';
// const WatchPage = () => {
//   const [searchparams] = useSearchParams();
//   console.log(searchparams.get("v"));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(closemenu());
//   }, []);

//   return (
//     <div className='flex'>
      

//       <div className='flex-col w-3/4'>
//         <div className='px-5 '>
//           <iframe
//             width="900"
//             height="450"
//             src={"https://www.youtube.com/embed/" + searchparams.get("v")}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </div>

//         <div className='px-5'>
         
//           <div className='w-full'>
//             <Comments />
//           </div>
//         </div>
//       </div>

//       <div className='bg-white rounded-lg shadow-lg border border-gray-300 w-1/4'>
//         <div className='flex'>
//         <Button  name="all" />
//         <Button  name="cricket" />
//         <Button  name="movies" />
//         </div>
//         <SideVideos />
//       </div>
//     </div>
//   );
// };

// export default WatchPage;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closemenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import SideVideos from './SideVideos';
import Button from './Button';

const WatchPage = () => {
  const [searchparams] = useSearchParams();
  const videoId = searchparams.get("v");
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    dispatch(closemenu());
    fetchVideoDetails();
  }, [videoId, dispatch]);

  const fetchVideoDetails = () => {
    // Replace 'YOUR_YOUTUBE_API_KEY' with your actual YouTube API key
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBCzQiSKNd_fGvsSboJfCxXQVrEcNhODuk &part=snippet`)
      .then(response => response.json())
      .then(data => {
        setVideoDetails(data.items[0].snippet);
      })
      .catch(error => {
        console.error('Error fetching video details:', error);
      });
  };

  if (!videoDetails) {
    // You can show a loading state here while fetching the details
    return <div>Loading...</div>;
  }

  return (
    <div className='flex'>
      <div className='flex-col w-3/4'>
        <div className='px-5'>
          <iframe
            width="900"
            height="450"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className='px-5'>
          <div className='w-full'>
            <h1 className='font-bold py-2'>{videoDetails.title}</h1>
            
           <Comments />
          
            {/* ... Other video details you want to display ... */}
          </div>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-lg border border-gray-300 w-1/4'>
        <div className='flex'>
          <Button name="all" />
          <Button name="cricket" />
          <Button name="movies" />
        </div>
        <SideVideos />
      </div>
    </div>
  );
};

export default WatchPage;






