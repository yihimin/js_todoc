import React from "react";
import { Link } from "react-router-dom";
import TodocLogo from "../assets/todoc_logo.svg";

const SignUpNav = () => {
  return (
    <header className="w-full h-[72px] px-8 py-4 shadow flex justify-between items-center">
      <Link to="/main" className="flex items-center">
        <img src={TodocLogo} alt="Todoc Logo" className="h-8" />
      </Link>
      <nav className="flex items-center">
        <Link to="/login" className="mr-2">
          <button className="w-24 h-10 px-4 py-2 bg-white text-stone-500 border border-stone-500 rounded">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="w-24 h-10 px-4 py-2 bg-customGreen text-white rounded">
            회원가입
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default SignUpNav;
