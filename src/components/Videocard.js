import React from 'react';

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-64 h-64 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
      <div className='overflow-hidden'>
      <li className='font-bold py-2 line-clamp-2' style={{ lineHeight: '1.5rem' }}>
            {title}
          </li>
          <ul>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default Videocard;
