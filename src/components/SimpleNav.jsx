import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodocLogo from "../assets/todoc_logo.svg";

const SimpleNav = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

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
      <Link to="/" className="flex items-center">
        <img src={TodocLogo} alt="Todoc Logo" className="h-8" />
      </Link>
    </header>
  );
};

export default SimpleNav;
