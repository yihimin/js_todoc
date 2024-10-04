import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams 추가
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import SearchNav from "../components/SearchNav";
import Modal from "../modal/Modal";
import HeartButton from "../components/HeartButton";
import booksInfo from "../data/books_info.json"; // books_info.json 파일에서 가져오기
import pilsaText from "../data/pilsa.json"; // pilsa.json 파일에서 가져오기

const PilsaPage = () => {
  const { id } = useParams(); // URL 파라미터에서 id 값 가져오기
  const navigate = useNavigate();

  // 책 정보 찾기 (id가 없으면 첫 번째 책을 기본으로 사용)
  const book = booksInfo.find((b) => b.id === parseInt(id)) || booksInfo[0];
  const pilsaData = pilsaText.find((text) => text.bookId === parseInt(id));

  // 상태 관리 (훅은 조건 없이 항상 호출)
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(book.likes); // 책의 좋아요 수로 초기화
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    actionName: "",
    closeName: "",
  });

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const [userInputs, setUserInputs] = useState(
    pilsaData ? Array(pilsaData.texts.length).fill("") : []
  );

  useEffect(() => {
    if (pilsaData && pilsaData.texts.length > 0) {
      setUserInputs(Array(pilsaData.texts.length).fill(""));
    }
  }, [pilsaData]);

  const totalChars = pilsaData
    ? pilsaData.texts.reduce((sum, text) => sum + text.length, 0)
    : 0;

  const openModal = (modalProps) => {
    const {
      title = "정말로 나갈까요?",
      message = "저장하지 않은 내용은 사라집니다.",
      actionName = "나가기",
      closeName = "돌아가기",
    } = modalProps;
    setModalContent({ title, message, actionName, closeName });
    setIsModalOpen(true);
  };

  const handlePageOut = () => {
    navigate("/main");
  };

  const closeModal = () => setIsModalOpen(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  const updateProgressBar = useCallback(() => {
    const progressBar = document.getElementById("progressBar");
    const progressPercent =
      totalChars > 0 ? Math.floor((currentChars / totalChars) * 100) : 0;
    if (progressBar) {
      progressBar.style.width = progressPercent + "%";
    }
  }, [currentChars, totalChars]);

  useEffect(() => {
    updateProgressBar();
  }, [currentChars, updateProgressBar]);

  const checkTextMatch = (e) => {
    const sampleText = pilsaData ? pilsaData.texts[currentTextIndex] : "";
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
        pilsaData.texts
          .slice(0, currentTextIndex)
          .reduce((sum, text) => sum + text.length, 0) + userInput.length
      );
    }

    if (isMatching && userInput.length === sampleText.length) {
      if (currentTextIndex < pilsaData.texts.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        alert("모든 텍스트를 완료했습니다!");
      }
    }
  };

  const updateSampleText = useCallback(() => {
    const sampleTextElement = document.getElementById("sampleText");
    if (sampleTextElement && pilsaData) {
      sampleTextElement.innerHTML = pilsaData.texts[currentTextIndex]
        .split("")
        .map((char, i) => `<span>${char}</span>`)
        .join("");
    }
  }, [currentTextIndex, pilsaData]);

  useEffect(() => {
    updateSampleText();
  }, [currentTextIndex, updateSampleText]);

  const saveNotify = () => toast.success("모든 내용이 저장되었습니다.");

  const handlePrevious = () => {
    if (currentTextIndex > 0) {
      setCurrentTextIndex(currentTextIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentTextIndex < pilsaData.texts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    }
  };

  return (
    <div className="mb-6">
      <SearchNav />
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
            <div
              id="sampleText"
              className="flex-1 text-gray-500 whitespace-pre-wrap break-words overflow-auto"
            ></div>
          </div>
          <div className="flex flex-1 p-4 bg-white shadow-md rounded-lg box-border h-[200px] md:h-[420px] md:w-[50%] lg:w-[40%]">
            <textarea
              id="userInput"
              className="w-full h-full resize-none border-none outline-none text-lg text-gray-800 whitespace-pre-wrap break-words"
              rows="10"
              value={userInputs[currentTextIndex]}
              onChange={checkTextMatch}
            ></textarea>
          </div>
          {currentTextIndex < pilsaData.texts.length - 1 && (
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
      </div>
      <div className="flex items-center mx-10">
        <img
          src={process.env.PUBLIC_URL + book.image}
          alt={book.title}
          className="w-[100px] h-[150px] mr-5"
        />
        <div className="flex-1 font-normal">
          <h2 className="mb-2 font-semibold">{book.title}</h2>
          <p>저자: {book.author}</p>
          <p>장르: {book.genre}</p>
          <HeartButton
            isLiked={isLiked}
            likeCount={likeCount}
            onHeartClick={handleHeartClick}
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          closeModal();
        }}
        title={modalContent.title}
        message={modalContent.message}
        actionName={modalContent.actionName}
        closeName={modalContent.closeName}
      />
    </div>
  );
};

export default PilsaPage;
