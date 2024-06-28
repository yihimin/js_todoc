import React from 'react';
import TodocLogo from '../assets/todoc_logo.svg';
import SearchIcon from '../assets/search_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';

const SearchNav = () => {
  return (
    <div className="PilsaPage">
            <div className="header">
                <div className="logo">
                    <img src={TodocLogo} alt="Todoc Logo"/>
                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="검색어를 입력하세요"/>
                        <span className="search-icon"><img src={SearchIcon} alt="Search"/></span>
                    </div>
                </div>
                <div className="user-icon"><img src={ProfileIcon} alt="Profile"/></div>
            </div>
    </div>
  );
}

export default SearchNav;
