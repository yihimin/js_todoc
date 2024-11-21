import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import SearchNav from "../components/SearchNav";
import LikeIcon from "../assets/like_icon.svg";
import LikeIconFull from "../assets/like_icon_full.svg";
import LeftButtonGray from "../assets/left_button_gray.svg";
import LeftButtonGreen from "../assets/left_button_green.svg";
import RightButtonGray from "../assets/right_button_gray.svg";
import RightButtonGreen from "../assets/right_button_green.svg";
import HeartButton from "../components/HeartButton";
import { DataApiContext } from "../services/DataApiContext"; // DataApiContext import

const MainPage = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLike, setCurrentLike] = useState([]);
  const [booksInfo, setBooksInfo] = useState([]);
  const [recommendedArticles, setRecommendedArticles] = useState([]);
  const [editorsPick, setEditorsPick] = useState([]);

  const navigate = useNavigate(); // useNavigate 훅 사용
  const dataApi = useContext(DataApiContext); // DataApiContext 사용

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 목데이터 또는 진데이터에서 필요한 데이터들을 가져옵니다.
        const books = await dataApi.getBooks();
        const articles = await dataApi.getRecommendedArticles();
        const picks = await dataApi.getEditorsPick();

        setBooksInfo(books);
        setRecommendedArticles(articles);
        setEditorsPick(picks);
        setCurrentLike(articles.map(() => false)); // 초기 좋아요 상태 설정
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, [dataApi]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booksInfo.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(booksInfo.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLike = (index) => {
    const currentLikes = [...currentLike];
    currentLikes[index] = !currentLikes[index];
    setCurrentLike(currentLikes);
  };

  const handleImageClick = (id) => {
    navigate(`/pilsa/${id}`); // 클릭 시 해당 ID의 페이지로 이동
  };

  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = currentPage === totalPages;

  // 로딩 상태를 표시
  if (!booksInfo.length || !recommendedArticles.length || !editorsPick.length) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <SearchNav />
      <div className="w-4/5 mx-auto">
        <section className="flex flex-col space-y-9">
          <div className="text-[32px] font-bold mt-20">이런 글은 어때요?</div>
          <div className="flex flex-col space-y-7">
            {recommendedArticles.map((article, index) => (
              <div
                className="h-[132px] relative rounded-[10px] border border-[#8a8a8a] p-[25px_60px]"
                key={index}>
                <div className="flex flex-row justify-between">
                  <div className="w-4/5">
                    <div className="inline-block px-[13px] py-px bg-[#8A8A8A] rounded-[45px] text-stone-50 text-[15px] font-normal">
                      {article.category}
                    </div>
                    <div className="text-stone-950 text-xl font-semibold">
                      {article.title}
                    </div>
                    <div className="text-zinc-500 text-[15px] overflow-hidden whitespace-nowrap text-ellipsis">
                      {article.content}
                    </div>
                  </div>
                  <HeartButton
                    currentLike={currentLike[index]}
                    handleLike={() => handleLike(index)}
                    article={article}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="current-writing flex flex-col space-y-9">
          <div className="flex flex-row mt-20 justify-between">
            <div className="text-[32px] font-bold">
              지금 이런 글을 필사하고 있어요
            </div>
            <div className="h-[46px] flex flex-row">
              <img
                src={prevButtonDisabled ? LeftButtonGray : LeftButtonGreen}
                alt="Previous"
                style={{ cursor: "pointer" }}
                onClick={handlePrevPage}
                className="mr-[32px]"
              />
              <img
                src={nextButtonDisabled ? RightButtonGray : RightButtonGreen}
                alt="Next"
                style={{ cursor: "pointer" }}
                onClick={handleNextPage}
                className=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 flex-row justify-between">
            {currentItems.map((writing, index) => (
              <div className="flex flex-col items-center gap-[5px]" key={index}>
                <div
                  className="w-[212.74px] h-[386.87px] relative"
                  onClick={() => handleImageClick(writing.id)} // 클릭 시 페이지 이동
                  style={{ cursor: "pointer" }}
                >
                  <img src={writing.image} alt="BookSign" />
                  <div className="left-0 top-[325.37px] absolute text-[22px] font-semibold">
                    {writing.title}
                  </div>
                  <div className="left-0 top-[358.87px] absolute text-zinc-500 text-[19px] font-normal">
                    {writing.author} · {writing.genre}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col">
          <div className="text-[32px] font-bold mt-20">에디터의 PICK</div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 place-items-center">
            {editorsPick.map((pick, index) => (
              <img
                src={pick.img}
                alt="BookSign"
                className="mt-[54px]"
                key={index}
              />
            ))}
          </div>
        </section>
        <div className="mb-20"></div>
      </div>
    </div>
  );
};

export default MainPage;
