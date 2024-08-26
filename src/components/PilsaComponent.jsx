import React, { useState, useEffect, useCallback } from 'react';
import LeftArrow from '../assets/left_arrow.svg'; 
import RightArrow from '../assets/right_arrow.svg'; 

const sampleTexts = [
    "이것은 샘플 텍스트입니다. 첫 번째 텍스트입니다.",
    "여기 또 다른 샘플 텍스트가 있습니다. 두 번째 텍스트입니다.",
    "이 텍스트는 세 번째 샘플 텍스트입니다."
];

const PilsaComponent = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentChars, setCurrentChars] = useState(0);
    const [userInputs, setUserInputs] = useState(Array(sampleTexts.length).fill(""));
    const [saveMessage, setSaveMessage] = useState(""); // 저장 완료 메시지 상태 추가
    const totalChars = sampleTexts.reduce((sum, text) => sum + text.length, 0);

    // useCallback을 사용하여 updateProgressBar 함수를 메모이제이션
    const updateProgressBar = useCallback(() => {
        const progressBar = document.getElementById('progressBar');
        const progressPercent = Math.floor((currentChars / totalChars) * 100);
        progressBar.style.width = progressPercent + '%';
    }, [currentChars, totalChars]);

    // useEffect를 사용하여 currentChars가 변경될 때 updateProgressBar 호출
    useEffect(() => {
        updateProgressBar();
    }, [currentChars, updateProgressBar]);

    // checkTextMatch 함수에서 사용자가 입력한 텍스트를 검증하고 진행 상태를 업데이트
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

    // useCallback을 사용하여 updateSampleText 함수를 메모이제이션
    const updateSampleText = useCallback(() => {
        const sampleTextElement = document.getElementById('sampleText');
        if (sampleTextElement) {
            sampleTextElement.innerHTML = sampleTexts[currentTextIndex].split('').map((char, i) => `<span>${char}</span>`).join('');
        }
    }, [currentTextIndex]);

    // useEffect를 사용하여 currentTextIndex가 변경될 때 updateSampleText 호출
    useEffect(() => {
        updateSampleText();
    }, [currentTextIndex, updateSampleText]);

    const handleSave = () => {
        console.log('저장된 내용:', userInputs[currentTextIndex]);
        setSaveMessage("내용이 저장되었습니다."); // 저장 완료 메시지 업데이트
    };

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
        <div className="flex flex-col items-center p-5 box-border">
            <div className="flex flex-col md:flex-row justify-between items-center relative mb-8 w-full max-w-[85%]">
                {currentTextIndex > 0 && (
                    <div 
                        className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[60px] h-[60px] text-white bg-gray-800 rounded-full cursor-pointer opacity-0 transition-opacity duration-300 hover:opacity-100 z-10" 
                        onClick={handlePrevious}
                    >
                        <img src={LeftArrow} alt="Left Arrow"/>
                    </div>
                )}
                <div className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border h-[420px]">
                    <div id="sampleText" className="flex-1 text-gray-500 whitespace-pre-wrap break-words"></div>
                </div>
                <div className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border h-[420px]">
                    <textarea
                        id="userInput"
                        className="w-full h-full resize-none border-none outline-none text-lg text-gray-800 whitespace-pre-wrap break-words"
                        rows="10"
                        value={userInputs[currentTextIndex]}
                        onChange={checkTextMatch}
                        onCompositionStart={handleCompositionStart}
                        onCompositionEnd={handleCompositionEnd}
                    ></textarea>
                </div>
                {currentTextIndex < sampleTexts.length - 1 && (
                    <div 
                        className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[60px] h-[60px] text-white bg-gray-800 rounded-full cursor-pointer opacity-0 transition-opacity duration-300 hover:opacity-100 z-10" 
                        onClick={handleNext}
                    >
                        <img src={RightArrow} alt="Right Arrow"/>
                    </div>
                )}
            </div>
            <div className="w-full bg-gray-300 rounded-full overflow-hidden mb-4 max-w-[85%]">
                <div id="progressBar" className="h-2 bg-red-500 transition-width duration-500"></div>
            </div>
            <div className="flex justify-end mb-5 max-w-[85%]">
                <button 
                    id="saveButton" 
                    className="px-7 py-3 bg-gray-400 text-white rounded-md transition-colors duration-300 hover:bg-red-400"
                    onClick={handleSave}
                >
                    저장하기
                </button>
            </div>
            {saveMessage && (
                <div className="text-green-500 text-sm">
                    {saveMessage}
                </div>
            )}
        </div>
    );
};

export default PilsaComponent;
