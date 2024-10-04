import React from "react";

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

export default HeartButton;
