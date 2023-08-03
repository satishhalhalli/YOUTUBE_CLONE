import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Videocard from './Videocard';
import Searchvideocard from './SearchVideocard';
import { useParams } from 'react-router-dom';
import { SEARCH_TEXT_API } from '../utils/constants';
const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);
  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=AIzaSyBCzQiSKNd_fGvsSboJfCxXQVrEcNhODuk`
    );
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <Searchvideocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
