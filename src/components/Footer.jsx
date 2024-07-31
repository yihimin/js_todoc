import React from "react";
import TodocLogo from "../assets/todoc_logo.svg";
//import InstagramIcon from "../assets/instagram_icon.svg"; // Uncomment these lines if the icons are available
//import MenuIcon from "../assets/menu_icon.svg"; // Uncomment these lines if the icons are available

const Footer = () => {
  return (
    <footer className="bg-white py-12 shadow-inner">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={TodocLogo} alt="Todoc Logo" className="h-8 mr-4" />
          <ul className="flex space-x-4 text-gray-600 text-sm">
            <li>
              <a href="#about" className="hover:text-gray-800">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gray-800">
                FAQ
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-800">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-800">
                이용 약관
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-800">
                문의·오류 제보
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-2 text-gray-600 text-sm">
          <a href="mailto:hello@tabi.com" className="hover:text-gray-800">
            제품 문의: hello@tabi.com
          </a>
          <div className="flex space-x-4">
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="h-6" />
            </a>
            <a href="#menu" className="hover:text-gray-800">
              <img src={MenuIcon} alt="Menu" className="h-6" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
