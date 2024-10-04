import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import SearchNav from "../components/SearchNav";
import LikeIcon from "../assets/like_icon.svg";
import LikeIconFull from "../assets/like_icon_full.svg";
import LeftButtonGray from "../assets/left_button_gray.svg";
import LeftButtonGreen from "../assets/left_button_green.svg";
import RightButtonGray from "../assets/right_button_gray.svg";
import RightButtonGreen from "../assets/right_button_green.svg";
import RecommendedArticles from "../data/recommended_articles.json";
import BooksInfo from "../data/books_info.json";
import EditorsPick from "../data/editors_pick.json";

const MainPage = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLike, setCurrentLike] = useState(
    RecommendedArticles.map(() => false)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BooksInfo.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(BooksInfo.length / itemsPerPage);
  const navigate = useNavigate(); // useNavigate 훅 사용

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

  return (
    <div>
      <SearchNav />
      <div className="w-4/5 mx-auto">
        <section className="flex flex-col space-y-9">
          <div className="text-[32px] font-bold mt-20">이런 글은 어때요?</div>
          <div className="flex flex-col space-y-7">
            {RecommendedArticles.map((article, index) => (
              <div
                className="h-[132px] relative rounded-[10px] border border-[#8a8a8a] p-[25px_60px]"
                key={index}
              >
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
                  <div className="items-center text-[#8a8a8a] text-[15px] font-normal flex flex-row">
                    <img
                      src={currentLike[index] ? LikeIconFull : LikeIcon}
                      alt="LikeIcon"
                      className="mr-[1px] mt-[5px]"
                      key={index}
                      onClick={() => handleLike(index)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="">
                      {currentLike[index] ? article.likes + 1 : article.likes}
                    </div>
                  </div>
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
            {EditorsPick.map((pick, index) => (
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
