import React from 'react';
import './WritingPage.css';

const WritingPage = () => {
    return (
        <div className="writing-page">
            <header className="writing-header">
                <div className="logo">
                    <img src="/path/to/logo.png" alt="토독" />
                    <h1>토독</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="검색어를 입력하세요" />
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </header>

            <main className="writing-main">
                <div className="writing-content">
                    <p>
                        그곳에 새로운 건물이 들어서는 데는 몇년이 채 걸리지 않았다. 약국과 체인 음식점, 학원과 렌털 회사들, 헬스 클럽과 요가 강습소, 치과와 보험 회사가 입주했다. 지하에는
                        그젯게획처럼 슈퍼마켓이 들어왔다. 중소도시에 흔하다뿐한 정갈 같은 대형 상가였다. 1층 엘리베이터 옆의 층별 안내도가 부착하기 그지없었다.
                    </p>
                    <p>
                        그 앞에 서서 이 건물에 극장이 있었던가, 헷갈려 하는 이들이 종종 있었다. 극장은 그곳에 새로운 건물이 들어서는 데는 몇년이 채 걸리지 않았다. 약국과 체인 음식점,
                        학원과 렌털 회사들, 헬스 클럽과 요가 강습소, 치과와 보험 회사가 입주했다. 지하에는 그젯게획처럼 슈퍼마켓이 들어왔다. 중소도시에 흔하다뿐한 정갈 같은 대형 상가였다.
                        1층 엘리베이터 옆의 층별 안내도가 부착하기 그지없었다.
                    </p>
                </div>
                <div className="wrting-content"></div>
                <div className="writing-section">
                    <p>
                        그곳에 새로운 건물이 들어서는 데는 몇년이 채 걸리지 않았다. 약국과 체인 음식점, 학원과 렌털 회사들, 헬스 클럽과 요가 강습소, 치과와 보험 회사가 입주했다. 지하에는
                        그젯게획처럼 슈퍼마켓이 들어왔다. 중소도시에 흔하다뿐한 정갈 같은 대형 상가였다. 1층 엘리베이터 옆의 층별 안내도가 부착하기 그지없었다.
                    </p>
                    <p>
                        그 앞에 서서 이 건물에 극장이 있었던가, 헷갈려 하는 이들이 종종 있었다. 극장은
                    </p>
                </div>
            </main>

            <footer className="writing-footer">
                <button className="save-button">저장하기</button>
            </footer>
        </div>
    );
};

export default WritingPage;
