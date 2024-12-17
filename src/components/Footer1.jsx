import React from "react";
import TodocLogo from "../assets/todoc_logo.svg";
import InstagramIcon from "../assets/instagram_icon.svg";
import MenuIcon from "../assets/menu_icon.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-12 shadow-inner">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start">
            <img src={TodocLogo} alt="Todoc Logo" className="h-8 mb-4" />
            <ul className="flex space-x-4 text-gray-600 text-sm mb-4">
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
            <a
              href="mailto:hello@tabi.com"
              className="hover:text-gray-800 mb-4"
            >
              제품 문의: hello@tabi.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ttext.doc?igsh=MXMzOWVta2hiYnloaw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="h-6" />
            </a>
            <a href="#menu" className="hover:text-gray-800">
              <img src={MenuIcon} alt="Menu" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
