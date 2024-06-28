import React from 'react';
import { Link } from 'react-router-dom';
import TodocLogo from '../assets/todoc_logo.svg';

const SignUpNav = () => {
  return (
    <div className="w-full h-[72px] px-8 py-4 bg-stone-50 shadow flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/main">
          <img src={TodocLogo} alt="Todoc Logo" className="h-8 mr-4"/>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/login">
          <button className="w-[91px] h-10 px-4 py-2 bg-white text-stone-500 border border-stone-500 rounded mr-2">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="w-[91px] h-10 px-4 py-2 bg-customGreen text-white rounded">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUpNav;
