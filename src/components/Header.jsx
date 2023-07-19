import { React, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown, IoMdNotifications } from 'react-icons/io';
import NetflixAvatar from '../assets/netflix-avatar.png';
import NetflixLogo from '../assets/netflix-logo.png';

const Header = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [search, setSearch] = useState(false);
  const [scroll, setScroll] = useState(false);

  const onUpdateActiveLink = (nav) => {
    setActiveNav(nav);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div
          className={`w-full fixed top-0 flex justify-between items-center px-8 py-4 z-[9999] transition ease-in-out duration-200 ${
            !scroll ? 'bg-transparent' : 'bg-black'
          }`}
          onScroll={() => handleScroll()}
        >
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <img
              src={NetflixLogo}
              alt="Netflix Logo"
              className="w-32 cursor-pointer"
            />
            <nav>
              <ul className="flex text-sm lg:text-md item-center gap-5 text-white">
                <li>
                  <a
                    href="#home"
                    className={
                      activeNav === 'home' ? 'opacity-100' : 'opacity-50'
                    }
                    onClick={() => onUpdateActiveLink('home')}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#tv-shows"
                    className={
                      activeNav === 'tv-shows' ? 'opacity-100' : 'opacity-50'
                    }
                    onClick={() => onUpdateActiveLink('tv-shows')}
                  >
                    Tv Shows
                  </a>
                </li>
                <li>
                  <a
                    href="#movies"
                    className={
                      activeNav === 'movies' ? 'opacity-100' : 'opacity-50'
                    }
                    onClick={() => onUpdateActiveLink('movies')}
                  >
                    Movies
                  </a>
                </li>
                <li>
                  <a
                    href="#recently-added"
                    className={
                      activeNav === 'recently-added'
                        ? 'opacity-100'
                        : 'opacity-50'
                    }
                    onClick={() => onUpdateActiveLink('recently-added')}
                  >
                    Recently Added
                  </a>
                </li>
                <li>
                  <a
                    href="#mylist"
                    className={
                      activeNav === 'mylist' ? 'opacity-100' : 'opacity-50'
                    }
                    onClick={() => onUpdateActiveLink('mylist')}
                  >
                    My List
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-7">
            {/* Search Bar */}
            <div className={`flex items-center ${search ? 'gap-4' : ''}`}>
              <button
                onClick={() => {
                  handleSearch();
                }}
              >
                <AiOutlineSearch size={20} color="white" />
              </button>
              <input
                type="text"
                placeholder="Search"
                className={`py-2 text-md text-white rounded-md shadow-lg capitalize bg-black bg-opacity-50 outline-none focus:ring-1 focus:ring-white transition-all ease-in-out duration-500 ${
                  !search ? 'w-0 px-0' : 'w-64 px-3 md:w-56'
                }`}
              />
            </div>
            <button className="relative">
              <IoMdNotifications size={32} color="white" />
              <div className="absolute top-0 -right-1 w-5 h-5 flex justify-center items-center rounded-full text-xs text-white bg-primary">
                2
              </div>
            </button>
            <div className="flex items-center cursor-pointer">
              <img src={NetflixAvatar} alt="" className="w-8" />
              <IoMdArrowDropdown size={16} color="white" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
