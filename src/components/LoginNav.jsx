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

const LoginNav = () => {
    return (
        <header className="w-full h-[72px] px-8 py-4 shadow flex justify-between items-center bg-white z-50 fixed">
            <Link to="/main" className="flex items-center">
                <img src={TodocLogo} alt="Todoc Logo" className="h-8" />
            </Link>
            <nav className="flex justify-center items-center">
                {/* NavButton 컴포넌트를 사용하여 버튼을 렌더링 */}
                <NavButton
                    to="/login"
                    text="로그인"
                    className="w-20 h-10 px-4 py-2 bg-white font-bold text-[#b0b0b0] border border-[#e0e0e0] rounded leading-normal"
                />
            </nav>
        </header>
    );
};

export default LoginNav;
