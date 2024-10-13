import React from "react";
import { Link } from "react-router-dom";
import TodocLogo from "../assets/todoc_logo.svg";

// NavButton 컴포넌트: 네비게이션 버튼을 재사용 가능하게 분리
const NavButton = ({ to, text, className }) => (
  <Link to={to}>
    <button className={className}>
      {text}
    </button>
  </Link>
);

const SignUpNav = () => {
  return (
    <header className="w-full h-[72px] px-8 py-4 shadow flex justify-between items-center bg-white z-50 fixed"> {/* 수정: fixed와 z-index 추가 - 랜딩페이지에서 이상하게 보여서 fixed 삭제했어요!*/}
      <Link to="/main" className="flex items-center">
        <img src={TodocLogo} alt="Todoc Logo" className="h-8" />
      </Link>
      <nav className="flex justify-center items-center">
        {/* NavButton 컴포넌트를 사용하여 버튼을 렌더링 */}
        <NavButton
          to="/login"
          text="로그인"
          className="w-20 h-10 px-4 py-2 bg-white font-bold text-[#b0b0b0] border border-[#e0e0e0] rounded mr-[10px] leading-normal"
        />
        <NavButton
          to="/signup"
          text="회원가입"
          className="w-[91px] h-10 px-4 py-2 bg-customGreen text-white rounded font-bold text-[#f9f9f9] leading-normal"
        />
      </nav>
    </header>
  );
};

export default SignUpNav;
