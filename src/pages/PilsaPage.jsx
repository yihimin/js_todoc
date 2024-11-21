import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate, useParams, useBlocker } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import SearchNav from "../components/SearchNav";
import Modal from "../modal/Modal";
import HeartButton from "../components/HeartButton";
import ArrowDropDown from "../assets/arrow_drop_down.svg";
import { DataApiContext } from "../services/DataApiContext";

const PilsaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dataApi = useContext(DataApiContext);

  const [book, setBook] = useState(null);
  const [pilsaData, setPilsaData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    actionName: "",
    closeName: "",
  });

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const [userInputs, setUserInputs] = useState([]);
  const [currentLike, setCurrentLike] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await dataApi.getBooks();
        const bookData = books.find((b) => b.id === parseInt(id)) || books[0];
        
        // getSentencesByBookId 메서드를 사용하여 특정 책 ID에 해당하는 필사 데이터를 가져옵니다.
        const pilsa = await dataApi.getSentencesByBookId(parseInt(id));
  
        setBook(bookData);
        setLikeCount(bookData.likes);
        setPilsaData(pilsa);
        if (pilsa && pilsa.texts) {
          setUserInputs(Array(pilsa.texts.length).fill(""));
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
        toast.error("데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    };
  
    fetchData();
  }, [id, dataApi]);  

  const handleLike = () => {
    setCurrentLike((currentLike) => !currentLike);
  };

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

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    for (let i = 0; i < userInputs.length; i++) {
      if (userInputs[i] !== "") {
        if (currentLocation.pathname !== nextLocation.pathname) {
          return true;
        }
      }
    }
    return false;
  });

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
    if (!pilsaData) return;

    const sampleText = pilsaData.texts[currentTextIndex] || "";
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

    const sampleTextElement = document.getElementById("sampleText");
    if (sampleTextElement) {
      sampleTextElement.innerHTML = matchedText;
    }

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
    if (!pilsaData) return;

    const sampleTextElement = document.getElementById("sampleText");
    if (sampleTextElement) {
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
    if (pilsaData && currentTextIndex < pilsaData.texts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    }
  };

  useEffect(() => {
    if (blocker.state === "blocked") {
      openModal({
        title: "정말로 나갈까요?",
        message: "저장하지 않은 내용은 사라집니다.",
        actionName: "나가기",
        closeName: "돌아가기",
      });
    }
  }, [blocker.state]);

  // 데이터가 로드되지 않았을 때 로딩 상태 표시
  if (!book || !pilsaData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
      <div className="mb-6">
        <SearchNav/>
        <div className="flex flex-col items-center box-border w-full">
          <div className="mt-[48px] w-[1216px] flex justify-end">
            <div className="h-8 justify-start items-start inline-flex">
              <div
                  className="pl-4 pr-2 py-1.5 rounded-lg border border-[#0f0f0f] justify-start items-center gap-2 flex">
                <p className="text-center text-[#0f0f0f] text-sm font-medium leading-tight tracking-tight">
                  일반 모드
                </p>
                <img src={ArrowDropDown}
                     alt="모드 설정 버튼"
                     className="w-[18px] h-[18px] relative"/>
              </div>
            </div>
          </div>
            <div className="flex flex-row justify-between items-center relative mb-8">
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
              <div
                  className="w-[568px] h-[420px] flex flex-1 m-4 mb-4">
                <div
                    id="sampleText"
                    className="flex-1 text-gray-500 leading-[30px] whitespace-pre-wrap break-words overflow-auto"
                ></div>
              </div>
              <div className='w-px h-[416px] bg-[#e0e0e0]'>
              </div>
              <div
                  className="w-[568px] h-[420px] flex flex-1 m-4 h-[200px]">
            <textarea
                id="userInput"
                className="w-full h-full resize-none border-none outline-none text-gray-800 leading-[30px] whitespace-pre-wrap break-words"
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
            <div className="w-[1216px] bg-gray-300 rounded-full overflow-hidden mb-4">
              <div
                  id="progressBar"
                  className="h-2 bg-red-500 transition-width duration-500"
              ></div>
            </div>
            <div className="w-[1216px] flex justify-end mb-5">
              <button
                  id="saveButton"
                  className="px-5 py-2 md:px-7 md:py-3 bg-gray-400 text-white rounded-md transition-colors duration-300 hover:bg-[#869F58]"
                  onClick={saveNotify}
              >
                저장하기
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[64.23px]">
            <div className="">
                    <textarea
                        className="w-[1032px] h-[360px] px-9 py-10 rounded-[10px] border border-[#8a8a8a] justify-center items-center inline-flex text-[#0f0f0f] text-base font-normal"
                        placeholder="필사하면서 생각난 것들을 자유롭게 메모해 보세요.">
                    </textarea>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[108px]">
            <div className="w-[1032px] h-[309px] flex flex-col">
              <div className="text-black text-[32px] font-bold">
                책 정보
              </div>
              <div className="flex flex-row mt-[32px]">
                <img
                    src={process.env.PUBLIC_URL + book.image}
                    alt={book.title}
                    className="w-[156px] h-[231px] mr-[32px]"/>
                <div className="flex flex-col">
                  <p className="text-[#0f0f0f] text-xl font-normal">“이러이러한 상황에서 위로가 되는 책 그런데 무엇무엇을 곁들인. ”</p>
                  <p className="mt-[6px] text-[#b0b0b0] text-base font-normal">에디터 레몬</p>
                  <div className="mt-[62px]">
                    <p className="mb-1 text-black text-xl font-semibold">{book.title}</p>
                    <p className="text-[#8a8a8a] text-base font-normal">{book.author} · {book.genre}</p>
                    <p className="text-[#8a8a8a] text-base font-normal">창비</p>
                    <HeartButton
                        currentLike={currentLike}
                        handleLike={handleLike}
                        article={book}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
              isOpen={isModalOpen}
              onClose={() => {
                closeModal();
                blocker.reset();
              }}
              onAction={() => blocker.proceed()}
              title={modalContent.title}
              message={modalContent.message}
              actionName={modalContent.actionName}
              closeName={modalContent.closeName}/>
        </div>
        );
        };

        export default PilsaPage;
