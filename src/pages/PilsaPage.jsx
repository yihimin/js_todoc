import React from 'react';
import './PilsaPage.css';
import TodocLogo from '../assets/todoc_logo.svg';
import SearchIcon from '../assets/search_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';
import PilsaComponent from '../components/PilsaComponent';

const PilsaPage = () => {
    return (
        <div className="PilsaPage">
            <div className="header">
                <div className="logo">
                    <img src={TodocLogo} alt="Todoc Logo"/>
                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="검색어를 입력하세요"/>
                        <span className="search-icon"><img src={SearchIcon} alt="Search"/></span>
                    </div>
                </div>
                <div className="user-icon"><img src={ProfileIcon} alt="Profile"/></div>
            </div>
            <div className="container">
                <PilsaComponent />
                <div className="book-info">
                    <div className="book-cover"></div>
                    <div className="book-details">
                        <h2>책 정보</h2>
                        <p>“이러이러한 상황에서 위로가 되는 책 그런데 무엇무엇을 걸들인.”</p>
                        <p>저자: 피터 피팅</p>
                        <p>장르: 정서적 소설</p>
                        <p>길이: 3장</p>
                        <p>❤ 100</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PilsaPage;
