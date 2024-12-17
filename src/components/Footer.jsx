import React from "react";
import TodocLogo from "../assets/todoc_logo.svg";
import InstagramIcon from "../assets/instagram_icon.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-12 shadow-inner">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* 로고 및 이메일 */}
          <div className="flex flex-col items-start">
            <img
              src={TodocLogo}
              alt="Todoc Logo"
              className="h-6 md:h-8 lg:h-10 mb-2 md:mb-4 transition-all duration-300"
            />
            <a
              href="mailto:hello@tabi.com"
              className="text-xs md:text-sm lg:text-base text-gray-600 hover:text-gray-800 mb-4 transition-all duration-300"
            >
              제품 문의: hello@tabi.com
            </a>
          </div>

          {/* 인스타그램 아이콘 */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ttext.doc?igsh=MXMzOWVta2hiYnloaw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="h-5 md:h-6 lg:h-8 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
