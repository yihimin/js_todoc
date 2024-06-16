import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>토독, 좋은 글을 만나는 새로운 방법</h1>
                <button className="cta-button">가입하고 시작하기</button>
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
                <div className="testimonials">
                    <div className="testimonial">
                        <p>송수정</p>
                        <p>어쩌구 저쩌구</p>
                    </div>
                    <div className="testimonial">
                        <p>송수정</p>
                        <p>토독 덕분에 좋은 글을 많이 접할 수 있게 되었어요. 너무 좋아요!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
