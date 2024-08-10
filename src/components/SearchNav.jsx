import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodocLogo from "../assets/todoc_logo.svg";
import SearchIcon from "../assets/search_icon.svg";
import ProfileIcon from "../assets/profile_icon.svg";

const SearchNav = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleProfileClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트 버블링을 막습니다.
    setIsProfileClicked(!isProfileClicked);
  };

  const menuItems = [
    { name: "마이페이지", path: "/mypage" },
    { name: "진행중 필사", path: "/mypage/writting" },
    { name: "완료된 필사", path: "/mypage/written" },
    { name: "스크랩", path: "/mypage/scrap" },
    { name: "메모한 글", path: "/mypage/notes" },
  ];

  // 드롭다운 이외의 부분을 클릭하면 드롭다운을 닫음
  React.useEffect(() => {
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
      <div className="flex items-center">
        <div className="relative max-w-md mx-4">
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
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link to={item.path} className="block w-full h-full">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default SearchNav;
