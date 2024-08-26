import React, { useState } from "react";
import SearchNav from "../components/SearchNav";
import PilsaComponent from "../components/PilsaComponent";
import bookInfo from "../data/bookInfo.json";

// HeartButton 컴포넌트: 하트 버튼과 좋아요 수 표시
const HeartButton = ({ isLiked, likeCount, onHeartClick }) => {
  return (
    <div className="flex items-center mt-2">
      <button className="text-2xl" onClick={onHeartClick}>
        {isLiked ? "❤️" : "🤍"}
      </button>
      <span className="ml-2 text-lg">{likeCount}</span>
    </div>
  );
};

const PilsaPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="mb-6">
      <SearchNav />
      <PilsaComponent />
      <div className="flex items-center mx-10">
        {/* JSON 파일에서 불러온 이미지 사용 */}
        <img
          src={bookInfo.image}
          alt={bookInfo.title}
          className="w-[100px] h-[150px] mr-5"
        />
        <div className="flex-1 font-normal">
          {/* JSON 파일에서 불러온 책 정보 사용 */}
          <h2 className="mb-2 font-semibold">{bookInfo.title}</h2>
          <p>저자: {bookInfo.author}</p>
          <p>장르: {bookInfo.genre}</p>
          <p>길이: 3장</p>
          <HeartButton
            isLiked={isLiked}
            likeCount={likeCount}
            onHeartClick={handleHeartClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PilsaPage;
