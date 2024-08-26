import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodocLogo from "../assets/todoc_logo.svg";
import SearchBar from "./SearchBar"; 
import DropdownMenu from "./DropdownMenu";
import ProfileIcon from "../assets/profile_icon.svg";

const SearchNav = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleProfileClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트 버블링을 막습니다.
    setIsProfileClicked((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (isProfileClicked) {
        setIsProfileClicked(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isProfileClicked]);

  return (
    <header className="w-full h-[72px] px-8 py-4 shadow flex justify-between items-center">
      <Link to="/main" className="flex items-center">
        <img src={TodocLogo} alt="Todoc Logo" className="h-8" />
      </Link>
      <div className="flex items-center flex-grow"> {/* flex-grow 추가 */}
        <SearchBar /> {/* 검색창 컴포넌트 */}
        <div className="relative ml-4"> {/* 추가 스타일 조정 */}
          <img
            src={ProfileIcon}
            alt="Profile"
            className="cursor-pointer"
            onClick={handleProfileClick}
          />
          {isProfileClicked && <DropdownMenu />} {/* 드롭다운 메뉴 컴포넌트 */}
        </div>
      </div>
    </header>
  );
};

export default SearchNav;
