import React from 'react';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <section className="recommended-articles">
                <h2>이런 글은 어때요?</h2>
                <div className="article-list">
                    <div className="article-item">
                        <span>소설</span>
                        <h3>피프티 피플</h3>
                        <p>담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...</p>
                        <div className="likes">❤ 100</div>
                    </div>
                    <div className="article-item">
                        <span>소설</span>
                        <h3>피프티 피플</h3>
                        <p>담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...</p>
                        <div className="likes">❤ 100</div>
                    </div>
                    <div className="article-item">
                        <span>소설</span>
                        <h3>피프티 피플</h3>
                        <p>담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...</p>
                        <div className="likes">❤ 100</div>
                    </div>
                </div>
            </section>

            <section className="current-writing">
                <h2>지금 이런 글을 필사하고 있어요</h2>
                <div className="writing-list">
                    <div className="writing-item">피프티 피플<br/>정세랑 - 소설</div>
                    <div className="writing-item">피프티 피플<br/>정세랑 - 소설</div>
                    <div className="writing-item">피프티 피플<br/>정세랑 - 소설</div>
                    <div className="writing-item">피프티 피플<br/>정세랑 - 소설</div>
                    <div className="writing-item">피프티 피플<br/>정세랑 - 소설</div>
                </div>
            </section>

            <section className="editors-pick">
                <h2>에디터의 PICK</h2>
                <div className="pick-list">
                    <div className="pick-item">
                        <p>“어쩌구저쩌구해서저쩌구저쩌구 하면 대단듯이 올라갑니다. 저쩌구저쩌구저쩌구”</p>
                        <span>- 에디터 레몬</span>
                    </div>
                    <div className="pick-item">
                        <p>“어쩌구저쩌구해서저쩌구저쩌구 하면 대단듯이 올라갑니다. 저쩌구저쩌구저쩌구”</p>
                        <span>- 에디터 레몬</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;
