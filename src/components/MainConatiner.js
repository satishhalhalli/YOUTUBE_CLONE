import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import Shimmer from './Shimmer';
const MainConatiner = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className='col-span-10'>
     
      <ButtonList/>
      <VideoContainer/>
      
    </div>
  )
}

export default MainConatiner
