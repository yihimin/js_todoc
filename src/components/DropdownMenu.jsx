import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "마이페이지", path: "/mypage" },
  { name: "진행중 필사", path: "/mypage/writting" },
  { name: "완료된 필사", path: "/mypage/written" },
  { name: "스크랩", path: "/mypage/scrap" },
  { name: "메모한 글", path: "/mypage/notes" },
];

const DropdownMenu = () => {
  return (
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
  );
};

export default DropdownMenu;
