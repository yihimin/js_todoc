import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TodocLogo from '../assets/todoc_logo.svg';
import SearchIcon from '../assets/search_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';

const SearchNav = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleProfileClick = () => {
    setIsProfileClicked(!isProfileClicked);
  };

  return (
    <div className="PilsaPage">
      <div className="header fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-4 h-16">
        <div className="logo">
          <img src={TodocLogo} alt="Todoc Logo"/>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="검색어를 입력하세요"/>
            <span className="search-icon"><img src={SearchIcon} alt="Search"/></span>
          </div>
        </div>
        <div className="user-icon relative">
          <img src={ProfileIcon} alt="Profile" className="cursor-pointer" onClick={handleProfileClick} />
          {isProfileClicked && (
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
      <div className="mt-16">
      </div>
    </div>
  );
}

export default SearchNav;
