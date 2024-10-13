import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/search_icon.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // 검색어가 존재할 때만 이동
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Enter 키로도 검색 가능하게
      handleSearch();
    }
  };

  return (
    <div className="relative w-[360px] h-11 mx-[24px]">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="w-full py-2 px-4 pl-5 rounded-[28px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customGreen bg-[#e0e0e0] placeholder:text-[#8a8a8a]"
        placeholder="검색어를 입력하세요"
      />
      <span
        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
        onClick={handleSearch}
      >
        <img src={SearchIcon} alt="Search" />
      </span>
    </div>
  );
};

export default SearchBar;
