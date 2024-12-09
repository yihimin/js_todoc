// components/BookItem.jsx
import React from "react";

const BookItem = ({ book, onImageClick }) => {
  return (
    <div
      className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
      onClick={() => onImageClick(book.id)}
      style={{ cursor: "pointer" }}
    >
      <div className="w-[180px] h-[320px] relative">
        <img
          src={book.image}
          alt="Book Cover"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-2 rounded-b-md">
          <div className="text-[16px] font-bold">{book.title}</div>
          <div className="text-[14px] font-normal">
            {book.author} · {book.genre}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
