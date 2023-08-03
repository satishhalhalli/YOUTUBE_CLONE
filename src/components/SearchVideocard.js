import React from 'react';

const Searchvideocard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // Check if the statistics object exists before accessing its properties
  

  return (
    <div className='p-2 m-2 w-64 h-64 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
      <div className='overflow-hidden'>
        <li className='font-bold py-2 line-clamp-2' style={{ lineHeight: '1.5rem' }}>
          {title}
        </li>
        <ul>
          <li>{channelTitle}</li>
        
        </ul>
      </div>
    </div>
  );
};

export default Searchvideocard;
