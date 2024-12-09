// components/BookInfoComponent.jsx
import React from "react";
import HeartButton from "./HeartButton";

const BookInfoComponent = ({ book, currentLike, handleLike }) => {
  return (
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
  );
};

export default BookInfoComponent;
