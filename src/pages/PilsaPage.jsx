import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SearchNav from "../components/SearchNav";
import Modal from "../modal/Modal";
import HeartButton from "../components/HeartButton";
import { DataApiContext } from "../services/DataApiContext";
import PilsaComponent from "../components/PilsaComponent";

const PilsaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dataApi = useContext(DataApiContext);

  const [book, setBook] = useState(null);
  const [pilsaData, setPilsaData] = useState(null);
  const [userInputs, setUserInputs] = useState([]);
  const [currentLike, setCurrentLike] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    actionName: "",
    closeName: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await dataApi.getBooks();
        const bookData = books.find((b) => b.id === parseInt(id)) || books[0];
        const pilsa = await dataApi.getSentencesByBookId(parseInt(id));

        setBook(bookData);
        setPilsaData(pilsa);
        if (pilsa && pilsa.texts) {
          setUserInputs(Array(pilsa.texts.length).fill(""));
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
        toast.error(
          "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
        );
      }
    };

    fetchData();
  }, [id, dataApi]);

  const saveNotify = () => toast.success("모든 내용이 저장되었습니다.");

  const handleLike = () => {
    setCurrentLike(!currentLike);
    // 좋아요 상태 업데이트 로직 추가 가능
  };

  const closeModal = () => setIsModalOpen(false);

  if (!book || !pilsaData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className="mb-6">
      <SearchNav />
      <PilsaComponent
        pilsaData={pilsaData}
        userInputs={userInputs}
        setUserInputs={setUserInputs}
      />
      <div className="w-[1216px] flex justify-end mb-5">
        <button
          id="saveButton"
          className="px-5 py-2 md:px-7 md:py-3 bg-gray-400 text-white rounded-md transition-colors duration-300 hover:bg-[#869F58]"
          onClick={saveNotify}
        >
          저장하기
        </button>
      </div>
      <div className="flex justify-center items-center mt-[64.23px]">
        <div className="">
          <textarea
            className="w-[1032px] h-[360px] px-9 py-10 rounded-[10px] border border-[#8a8a8a] justify-center items-center inline-flex text-[#0f0f0f] text-base font-normal"
            placeholder="필사하면서 생각난 것들을 자유롭게 메모해 보세요."
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[108px]">
        <div className="w-[1032px] h-[309px] flex flex-col">
          <div className="text-black text-[32px] font-bold">책 정보</div>
          <div className="flex flex-row mt-[32px]">
            <img
              src={process.env.PUBLIC_URL + book.image}
              alt={book.title}
              className="w-[156px] h-[231px] mr-[32px]"
            />
            <div className="flex flex-col">
              <p className="text-[#0f0f0f] text-xl font-normal">
                “이러이러한 상황에서 위로가 되는 책 그런데 무엇무엇을 곁들인. ”
              </p>
              <p className="mt-[6px] text-[#b0b0b0] text-base font-normal">
                에디터 레몬
              </p>
              <div className="mt-[62px]">
                <p className="mb-1 text-black text-xl font-semibold">
                  {book.title}
                </p>
                <p className="text-[#8a8a8a] text-base font-normal">
                  {book.author} · {book.genre}
                </p>
                <p className="text-[#8a8a8a] text-base font-normal">창비</p>
                <HeartButton
                  currentLike={currentLike}
                  handleLike={handleLike}
                  article={book}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAction={() => navigate("/main")}
        title={modalContent.title}
        message={modalContent.message}
        actionName={modalContent.actionName}
        closeName={modalContent.closeName}
      />
    </div>
  );
};

export default PilsaPage;
