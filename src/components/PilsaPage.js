import React, { useState, useEffect } from 'react';
import './PilsaPage.css';
import TodocLogo from '../assets/todoc_logo.svg';
import SearchIcon from '../assets/search_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';

const sampleTexts = [
    "이것은 샘플 텍스트입니다. 첫 번째 텍스트입니다.",
    "여기 또 다른 샘플 텍스트가 있습니다. 두 번째 텍스트입니다.",
    "이 텍스트는 세 번째 샘플 텍스트입니다."
];

const PilsaPage = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentChars, setCurrentChars] = useState(0);
    const [userInputs, setUserInputs] = useState(Array(sampleTexts.length).fill(""));
    const totalChars = sampleTexts.reduce((sum, text) => sum + text.length, 0);

    useEffect(() => {
        updateProgressBar();
    }, [currentChars]);

    const updateProgressBar = () => {
        const progressBar = document.getElementById('progressBar');
        const progressPercent = Math.floor((currentChars / totalChars) * 100);
        progressBar.style.width = progressPercent + '%';
        // progressBar.textContent = progressPercent + '%';
    };

    const checkTextMatch = (e) => {
        const sampleText = sampleTexts[currentTextIndex];
        const userInput = e.target.value;
        let updatedInputs = [...userInputs];
        updatedInputs[currentTextIndex] = userInput;
        setUserInputs(updatedInputs);

        let matchedText = '';
        let isMatching = true;

        for (let i = 0; i < sampleText.length; i++) {
            if (i < userInput.length) {
                if (sampleText[i] === userInput[i]) {
                    matchedText += '<span class="correct">' + sampleText[i] + '</span>';
                } else {
                    matchedText += '<span class="incorrect">' + sampleText[i] + '</span>';
                    isMatching = false;
                }
            } else {
                matchedText += sampleText[i];
                isMatching = false;
            }
        }

        document.getElementById('sampleText').innerHTML = matchedText;

        if (userInput.length <= sampleText.length) {
            setCurrentChars(sampleTexts.slice(0, currentTextIndex).reduce((sum, text) => sum + text.length, 0) + userInput.length);
        }

        if (isMatching && userInput.length === sampleText.length) {
            if (currentTextIndex < sampleTexts.length - 1) {
                setCurrentTextIndex(currentTextIndex + 1);
            } else {
                alert('모든 텍스트를 완료했습니다!');
            }
        }
    };

    const updateSampleText = () => {
        const sampleTextElement = document.getElementById('sampleText');
        if (sampleTextElement) {
            sampleTextElement.innerHTML = sampleTexts[currentTextIndex].split('').map((char, i) => `<span>${char}</span>`).join('');
        }
    };

    const handleSave = () => {
        console.log('저장된 내용:', userInputs[currentTextIndex]);
        alert('내용이 저장되었습니다.');
    };

    useEffect(() => {
        updateSampleText();
    }, [currentTextIndex]);

    const handlePrevious = () => {
        if (currentTextIndex > 0) {
            setCurrentTextIndex(currentTextIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentTextIndex < sampleTexts.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
        }
    };

    const handleCompositionStart = (e) => {
        e.target.classList.add('ime-mode-on');
    };

    const handleCompositionEnd = (e) => {
        e.target.classList.remove('ime-mode-on');
    };

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
                <div className="text-container">
                    {currentTextIndex > 0 && (
                        <div className="arrow-container left-arrow" onClick={handlePrevious}>
                            &lt;
                        </div>
                    )}
                    <div className="sample-container">
                        <div id="sampleText"></div>
                    </div>
                    <div className="separator"></div>
                    <div className="input-container">
                        <textarea id="userInput" rows="10" value={userInputs[currentTextIndex]}
                                  onChange={checkTextMatch}
                                  onCompositionStart={handleCompositionStart}
                                  onCompositionEnd={handleCompositionEnd}></textarea>
                    </div>
                    {currentTextIndex < sampleTexts.length - 1 && (
                        <div className="arrow-container right-arrow" onClick={handleNext}>
                            &gt;
                        </div>
                    )}
                </div>
                <div className="progress-container">
                    <div id="progressBar" className="progress-bar"></div>
                </div>
                <div className="button-container">
                    <button id="saveButton" onClick={handleSave}>저장하기</button>
                </div>
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
