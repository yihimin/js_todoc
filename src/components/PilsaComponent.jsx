import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

// 샘플 텍스트 데이터
const sampleTexts = [
  "이것은 샘플 텍스트입니다. 첫 번째 텍스트입니다.",
  "여기 또 다른 샘플 텍스트가 있습니다. 두 번째 텍스트입니다.",
  "이 텍스트는 세 번째 샘플 텍스트입니다.",
];

const PilsaComponent = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const [userInputs, setUserInputs] = useState(
    Array(sampleTexts.length).fill("")
  );
  // const [saveMessage, setSaveMessage] = useState("");
  // const [showToast, setShowToast] = useState(false); // 토스트 메시지 상태 추가
  const totalChars = sampleTexts.reduce((sum, text) => sum + text.length, 0);

  const updateProgressBar = useCallback(() => {
    const progressBar = document.getElementById("progressBar");
    const progressPercent = Math.floor((currentChars / totalChars) * 100);
    progressBar.style.width = progressPercent + "%";
  }, [currentChars, totalChars]);

  useEffect(() => {
    updateProgressBar();
  }, [currentChars, updateProgressBar]);

  const checkTextMatch = (e) => {
    const sampleText = sampleTexts[currentTextIndex];
    const userInput = e.target.value;
    let updatedInputs = [...userInputs];
    updatedInputs[currentTextIndex] = userInput;
    setUserInputs(updatedInputs);

    let matchedText = "";
    let isMatching = true;

    for (let i = 0; i < sampleText.length; i++) {
      if (i < userInput.length) {
        if (sampleText[i] === userInput[i]) {
          matchedText += '<span class="correct">' + sampleText[i] + "</span>";
        } else {
          matchedText += '<span class="incorrect">' + sampleText[i] + "</span>";
          isMatching = false;
        }
      } else {
        matchedText += sampleText[i];
        isMatching = false;
      }
    }

    document.getElementById("sampleText").innerHTML = matchedText;

    if (userInput.length <= sampleText.length) {
      setCurrentChars(
        sampleTexts
          .slice(0, currentTextIndex)
          .reduce((sum, text) => sum + text.length, 0) + userInput.length
      );
    }

    if (isMatching && userInput.length === sampleText.length) {
      if (currentTextIndex < sampleTexts.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        alert("모든 텍스트를 완료했습니다!");
      }
    }
  };

  const updateSampleText = useCallback(() => {
    const sampleTextElement = document.getElementById("sampleText");
    if (sampleTextElement) {
      sampleTextElement.innerHTML = sampleTexts[currentTextIndex]
        .split("")
        .map((char, i) => `<span>${char}</span>`)
        .join("");
    }
  }, [currentTextIndex]);

  useEffect(() => {
    updateSampleText();
  }, [currentTextIndex, updateSampleText]);

  const saveNotify = () => toast.success("모든 내용이 저장되었습니다.");

  // const handleSave = () => {
  //   console.log("저장된 내용:", userInputs[currentTextIndex]);
  //   setSaveMessage("내용이 저장되었습니다.");
  //   setShowToast(true); // 토스트 메시지 표시
  //
  //   // 3초 후에 토스트 메시지 숨김
  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 3000);
  // };

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
    e.target.classList.add("ime-mode-on");
  };

  const handleCompositionEnd = (e) => {
    e.target.classList.remove("ime-mode-on");
  };

  return (
    <div className="flex flex-col items-center p-5 box-border w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center relative mb-8 w-full">
        {currentTextIndex > 0 && (
          <div
            className="absolute left-0 md:left-[-80px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-white bg-gray-800 rounded-full cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100 z-10 ml-2"
            onClick={handlePrevious}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              alt="Left Arrow"
              className="w-4 md:w-6"
            />
          </div>
        )}
        <div className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border mb-4 md:mb-0 h-[200px] md:h-[420px] md:w-[50%] lg:w-[40%]">
          {/* md 사이즈부터 너비가 줄어듦 */}
          <div
            id="sampleText"
            className="flex-1 text-gray-500 whitespace-pre-wrap break-words overflow-auto"
          ></div>
        </div>
        <div className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border h-[200px] md:h-[420px] md:w-[50%] lg:w-[40%]">
          {/* md 사이즈부터 너비가 줄어듦 */}
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
            className="absolute right-0 md:right-[-80px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-white bg-gray-800 rounded-full cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100 z-10 mr-2"
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
      <div className="w-full bg-gray-300 rounded-full overflow-hidden mb-4">
        <div
          id="progressBar"
          className="h-2 bg-red-500 transition-width duration-500"
        ></div>
      </div>
      <div className="flex justify-end mb-5 w-full">
        <button
          id="saveButton"
          className="px-5 py-2 md:px-7 md:py-3 bg-gray-400 text-white rounded-md transition-colors duration-300 hover:bg-red-400"
          onClick={saveNotify}
        >
          저장하기
        </button>
      </div>
      {/*/!* 토스트 메시지 *!/*/}
      {/*{showToast && (*/}
      {/*  <div className="fixed bottom-5 left-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">*/}
      {/*    {saveMessage}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default PilsaComponent;
