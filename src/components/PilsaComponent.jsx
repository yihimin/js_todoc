import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PilsaComponent = ({ pilsaData, userInputs, setUserInputs }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChars, setCurrentChars] = useState(0); // 현재 입력한 문자 수
  const [progressPercent, setProgressPercent] = useState(0); // 프로그레스 상태

  const currentTextLength = pilsaData?.texts[currentTextIndex]?.length || 0; // 현재 텍스트의 총 문자 수

  const updateProgressBar = useCallback(() => {
    const percent =
      currentTextLength > 0
        ? Math.floor((currentChars / currentTextLength) * 100)
        : 0;

    setProgressPercent(percent); // 프로그레스 상태 업데이트

    // 프로그레스 바가 100%가 되면 다음 페이지로 이동
    if (percent === 100 && currentTextIndex < pilsaData.texts.length - 1) {
      setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentChars(0);
        setProgressPercent(0); // 다음 페이지로 넘어가면 프로그레스 초기화
      }, 300); // 0.3초 대기 후 다음 페이지로 이동
    }
  }, [currentChars, currentTextLength, currentTextIndex]);

  useEffect(() => {
    updateProgressBar();
  }, [currentChars, updateProgressBar]);

  const checkTextMatch = (e) => {
    if (!pilsaData) return;

    const sampleText = pilsaData.texts[currentTextIndex] || "";
    const userInput = e.target.value;
    let updatedInputs = [...userInputs];
    updatedInputs[currentTextIndex] = userInput;
    setUserInputs(updatedInputs);

    let matchedText = "";

    for (let i = 0; i < sampleText.length; i++) {
      if (i < userInput.length) {
        if (sampleText[i] === userInput[i]) {
          // 현재 입력 중인 글자에 스케일 효과 추가
          if (i === userInput.length - 1) {
            matchedText += `<span class="text-black font-bold">${sampleText[i]}</span>`;
          } else {
            matchedText += `<span class="text-black">${sampleText[i]}</span>`;
          }
        } else {
          matchedText += `<span class="text-red-500">${sampleText[i]}</span>`;
        }
      } else {
        matchedText += `<span class="text-gray-500">${sampleText[i]}</span>`;
      }
    }

    const sampleTextElement = document.getElementById("sampleText");
    if (sampleTextElement) {
      sampleTextElement.innerHTML = matchedText;
    }

    // 현재 입력한 문자 수 업데이트
    setCurrentChars(userInput.length);

    // 현재 텍스트가 완료된 경우
    if (userInput.length === sampleText.length) {
      if (currentTextIndex < pilsaData.texts.length - 1) {
        setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentChars(0);
          setProgressPercent(0); // 다음 페이지로 넘어가면 프로그레스 초기화
        }, 300); // 0.3초 대기 후 다음 페이지로 이동
      } else {
        alert("모든 텍스트를 완료했습니다!");
      }
    }
  };

  const updateSampleText = useCallback(() => {
    if (!pilsaData) return;

    const sampleTextElement = document.getElementById("sampleText");
    if (sampleTextElement) {
      sampleTextElement.innerHTML = pilsaData.texts[currentTextIndex]
        .split("")
        .map((char) => {
          if (char === " ") {
            return `<span>&nbsp;</span>`; // 띄어쓰기 유지
          }
          return `<span>${char}</span>`;
        })
        .join("");
    }
  }, [currentTextIndex, pilsaData]);

  useEffect(() => {
    updateSampleText();
  }, [currentTextIndex, updateSampleText]);

  const handlePrevious = () => {
    if (currentTextIndex > 0) {
      setCurrentTextIndex(currentTextIndex - 1);
      setCurrentChars(0);
      setProgressPercent(0); // 이전 페이지로 가면 프로그레스 초기화
    }
  };

  const handleNext = () => {
    if (currentTextIndex < pilsaData.texts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
      setCurrentChars(0);
      setProgressPercent(0); // 다음 페이지로 가면 프로그레스 초기화
    }
  };

  return (
    <div className="flex flex-col items-center relative mb-8 px-4 md:px-8 lg:px-16">
      {/* 왼쪽 화살표 */}
      <div className="flex flex-row justify-between items-center relative">
        {currentTextIndex > 0 && (
          <div
            className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white bg-gray-800 rounded-full cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100"
            onClick={handlePrevious}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              alt="Left Arrow"
              className="w-4 md:w-6"
            />
          </div>
        )}
        {/* 텍스트 영역 */}
        <div className="w-full max-w-[568px] aspect-[4/3] flex flex-1 m-4 mb-4">
          <div
            id="sampleText"
            className="flex-1 text-gray-500 text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-9 whitespace-pre-wrap break-words overflow-auto"
          ></div>
        </div>
        <div className="w-px h-[416px] bg-[#e0e0e0]"></div>
        <div className="w-[568px] h-[420px] flex flex-1 m-4 h-[200px]">
          <textarea
            id="userInput"
            className="w-full h-full resize-none border-none outline-none text-gray-800 text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-9 whitespace-pre-wrap break-words"
            rows="10"
            value={userInputs[currentTextIndex]}
            onChange={checkTextMatch}
          ></textarea>
        </div>
        {/* 오른쪽 화살표 */}
        {currentTextIndex < pilsaData.texts.length - 1 && (
          <div
            className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white bg-gray-800 rounded-full cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100"
            onClick={handleNext}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              alt="Right Arrow"
              className="w-4 md:w-6"
            />
          </div>
        )}
      </div>
      {/* 프로그레스 바 */}
      <div className="w-[90%] bg-gray-300 rounded-full h-2 my-4 mx-auto">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${progressPercent}%`,
            backgroundColor: "#8A9A64", // 올리브색
          }}
        ></div>
      </div>
    </div>
  );
};

export default PilsaComponent;
