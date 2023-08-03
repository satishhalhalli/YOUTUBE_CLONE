
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { togglemenu } from '../utils/appSlice';
import { YOUTUBE_SUGGETIONS_API } from '../utils/constants';
import { NavLink,Link } from "react-router-dom";
import logo1 from '../assets/notification-icon-png-9.png'
import personlogo from '../assets/personlogo.png'
import youtubelogo from '../assets/YouTube-Logo-2017-present.png'
import cursor from '../assets/cusor.png'
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGETIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const togglemenuHandler = () => {
    console.log("toggled");
    dispatch(togglemenu());
  };

  const handleSearchSubmit = () => {
    setSearchQuery('');
  };

  const handleSuggestionClick = (s) => {
    setSearchQuery(s);
    setShowSuggestions(false);
  };

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-md'>
      <div className='flex col-span-1'>
        <img
          onClick={() => togglemenuHandler()}
          className='h-10 p-2 cursor-pointer'
          alt='logo'
          src={cursor}
        />

        <a href='/' >
          <img
            className='h-10 mx-2'
            alt='youtube-logo'
            src={youtubelogo}
          />
        </a>
      </div>

      <div className='col-span-10 px-20 pt-2 relative'>
        <div>
          <input
            className='px-2 w-1/2 border border-gray-400 rounded-l-lg'
            type='text'
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <NavLink to={`/search/${searchQuery}`}>
            <button
              className='border border-gray-400 rounded-r-lg bg-slate-200'
              onClick={handleSearchSubmit}
            >
              search
            </button>
          </NavLink>
        </div>

        {showSuggestions && (
          <div className='absolute bg-white py-2 px-2 w-96 shadow-lg rounded-lg border-gray-100'>
            <ul className="cursor-pointer z-10">
              {suggestions.map((s) => (
               
               <Link to={`/search/${searchQuery}`}>
                <div
                  key={s}
                  className='shadow-sm hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleSuggestionClick(s)}
                >
                  {s}
                </div>
               </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='col-span-1 flex'>
        <img
          className='h-8'
          alt='person-logo'
          src={personlogo}
        />
        <img
          className='h-8 mx-10'
          alt='notifications'
          src={logo1}
        />
      </div>
    </div>
  );
};

export default Header;
