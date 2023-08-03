import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    // Enclose the JSX within parentheses or curly braces
    isMenuOpen && (
      <div className='p-5 shadow-lg w-48 rounded-lg'>
        <ul className='font-semibold'>
          <li className='hover:bg-gray-200 rounded-lg'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:bg-gray-200 rounded-lg'>Shorts</li>
          <li className='hover:bg-gray-200 rounded-lg'>Videos</li>
          <li className='hover:bg-gray-200 rounded-lg'>Live</li>
        </ul>

        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
          <li className='hover:bg-gray-200 rounded-lg'>Music</li>
          <li className='hover:bg-gray-200 rounded-lg'>Sports</li>
          <li className='hover:bg-gray-200 rounded-lg'>Gaming</li>
          <li className='hover:bg-gray-200 rounded-lg'>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
          <li className='hover:bg-gray-200 rounded-lg'>Music</li>
          <li className='hover:bg-gray-200 rounded-lg'>Sports</li>
          <li className='hover:bg-gray-200 rounded-lg'>Gaming</li>
          <li className='hover:bg-gray-200 rounded-lg'>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>Recommended</h1>
        <ul>
          <li className='hover:bg-gray-200 rounded-lg'>Cricket</li>
          <li className='hover:bg-gray-200 rounded-lg'>Sports</li>
          <li className='hover:bg-gray-200 rounded-lg'>Riding</li>
          <li className='hover:bg-gray-200 rounded-lg'>Movies</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
