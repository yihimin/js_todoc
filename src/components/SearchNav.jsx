import React, { useState } from "react";
import TodocLogo from "../assets/todoc_logo.svg";
import SearchIcon from "../assets/search_icon.svg";
import ProfileIcon from "../assets/profile_icon.svg";

const SearchNav = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleProfileClick = () => {
    setIsProfileClicked(!isProfileClicked);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-4 h-16">
      <div className="logo">
        <img src={TodocLogo} alt="Todoc Logo" />
      </div>
      <div className="relative flex-1 max-w-md mx-4">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customGreen"
          placeholder="검색어를 입력하세요"
        />
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <img src={SearchIcon} alt="Search" />
        </span>
      </div>
      <div className="relative">
        <img
          src={ProfileIcon}
          alt="Profile"
          className="cursor-pointer"
          onClick={handleProfileClick}
        />
        {isProfileClicked && (
          <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            {[
              "마이페이지",
              "진행중 필사",
              "완료된 필사",
              "스크랩",
              "메모한 글",
            ].map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-16"></div>
    </div>
  );
};

export default SearchNav;
