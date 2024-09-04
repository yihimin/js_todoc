import React, {useCallback, useEffect, useState} from 'react';
import LandingBackground from "../assets/landing_background.svg";
import SignUpNav from "../components/SignupNav";
import LeftArrow from '../assets/left_arrow.svg';
import RightArrow from '../assets/right_arrow.svg';
import LandingBook from '../assets/landing_book.png';
import LandingOffice from '../assets/landing_office.png';
import { useNavigate } from 'react-router-dom';

const sampleTexts = [
    "이것은 샘플 텍스트입니다. 첫 번째 텍스트입니다.",
    "여기 또 다른 샘플 텍스트가 있습니다. 두 번째 텍스트입니다.",
    "이 텍스트는 세 번째 샘플 텍스트입니다."
];

const LandingPage = () => {
        const [currentTextIndex, setCurrentTextIndex] = useState(0);
        const [currentChars, setCurrentChars] = useState(0);
        const [userInputs, setUserInputs] = useState(Array(sampleTexts.length).fill(""));
        const totalChars = sampleTexts.reduce((sum, text) => sum + text.length, 0);
        const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };

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
        <div>
            <SignUpNav/>
            <div className="min-h-screen flex flex-col">
                        <div className="relative flex-grow" style={{paddingTop: '72.22%'}}>
                            <img
                                src={LandingBackground}
                                alt="LandingBackground"
                                className="absolute z-20 mt-[30.12px] top-0 left-0 w-full h-full"
                            />
                        </div>
                        <div className="mt-[359.63px] flex justify-center items-center flex-col">
                            <p className="text-[32px] font-black">
                                한번 써볼까요?
                            </p>
                            <div className="w-full mt-[30.14px]">
                                <div className="flex flex-col items-center p-5 box-border">
                                    <div
                                        className="flex flex-col md:flex-row justify-between items-center relative mb-8 w-full max-w-[85%]">
                                        {currentTextIndex > 0 && (
                                            <div
                                                className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[60px] h-[60px] text-white bg-gray-800 rounded-full cursor-pointer opacity-0 transition-opacity duration-300 hover:opacity-100 z-10"
                                                onClick={handlePrevious}
                                            >
                                                <img src={LeftArrow} alt="Left Arrow"/>
                                            </div>
                                        )}
                                        <div
                                            className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border h-[420px]">
                                            <div id="sampleText"
                                                 className="flex-1 text-gray-500 whitespace-pre-wrap break-words"></div>
                                        </div>
                                        <div
                                            className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border h-[420px]">
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
                                        <div id="progressBar"
                                             className="h-2 bg-red-500 transition-width duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className="mt-[214.14px]">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-[#0f0f0f] text-[32px] font-bold">월 3,400원으로 시작</p>
                        <p className="text-[#8a8a8a] text-xl font-normal">글로 만나는 새로운 자기계발</p>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-[113.33px]">
                        <div className="flex flex-row">
                            <img src={LandingBook} alt="Landing Book"/>
                            <img className="ml-[263.36px]" src={LandingOffice} alt="Landing Office"/>
                        </div>
                        <div className="flex flex-row text-[#869e57] text-2xl font-medium">
                            <p className="mt-[35.05px] text-center">100여개 도서<br/>타이핑 기능 제공</p>
                            <p className="ml-[204.37px] mt-[38.09px]">오피스 테마 제공</p>
                        </div>
                        <button className="w-[374px] h-[55px] rounded-[10px] mt-[284.04px] mb-[25px] bg-[#869F58] shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                                onClick={handleClick}>
                            <p className="text-[#f9f9f9] text-xl font-bold ">1달 무료체험 시작하기</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
