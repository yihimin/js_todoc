import React from 'react';
import './LandingPage.css';
import PilsaComponent from '../components/PilsaComponent';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>토독, 좋은 글을 만나는 새로운 방법</h1>
                <button className="cta-button" onclick="location.href='/signup'">가입하고 시작하기</button>
            </header>

            <section className="intro-section">
                <h2>휴식은 편안해야하니까 ___를 골라드릴게요.</h2>
                <div className="features">
                    <div className="feature-item">엄선한 글 제공</div>
                    <div className="feature-item">노트북만 있으면 언제나</div>
                    <div className="feature-item">엑셀 모드로 어디서나</div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>써보고 결정하세요</h2>
                <PilsaComponent />
            </section>
        </div>
    );
};

export default LandingPage;
