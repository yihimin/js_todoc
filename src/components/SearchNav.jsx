import React, { useState } from 'react';
import TodocLogo from '../assets/todoc_logo.svg';
import SearchIcon from '../assets/search_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';

const SearchNav = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsProfileHovered(true);
  };

  const handleMouseLeave = () => {
    setIsProfileHovered(false);
  };

  return (
    <div>
      <div className="header flex justify-between items-center p-4 bg-white shadow-md">
        <div className="logo">
          <img src={TodocLogo} alt="Todoc Logo" />
        </div>
        <div className="search-container relative flex-grow mx-4">
          <div className="search-bar flex items-center">
            <input type="text" className="search-input flex-grow py-2 px-4 border rounded-l-md" placeholder="검색어를 입력하세요" />
            <span className="search-icon bg-gray-200 p-2 rounded-r-md">
              <img src={SearchIcon} alt="Search" />
            </span>
          </div>
        </div>
        <div className="user-icon relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={ProfileIcon} alt="Profile" className="cursor-pointer" />
          {isProfileHovered && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">마이페이지</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">진행중 필사</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">완료된 필사</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">스크랩</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">메모한 글</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchNav;
