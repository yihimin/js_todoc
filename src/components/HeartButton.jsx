import React, {useState} from "react";
import LikeIcon from "../assets/like_icon.svg";
import LikeIconFull from "../assets/like_icon_full.svg";

// HeartButton 컴포넌트: 하트 버튼과 좋아요 수 표시
const HeartButton = ({ currentLike, handleLike, article }) => {
  return (
      <div className="items-center text-[#8a8a8a] text-[15px] font-normal flex flex-row">
          <img
              src={currentLike ? LikeIconFull : LikeIcon}
              alt="LikeIcon"
              className="mr-[1px] mt-[5px]"
              onClick={() => handleLike()}
              style={{cursor: "pointer"}}
          />
          <div className="text-[#8a8a8a] text-xl font-medium min-w-[40px]">
              {currentLike ? article.likes + 1 : article.likes}
          </div>
      </div>
  );
};

export default HeartButton;
