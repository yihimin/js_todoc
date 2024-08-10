import React from "react";

const MyWritingCard = ({ image, title, author, genre }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 rounded-full bg-pink-200 object-cover"
        />
        <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full border-2 border-pink-200"></div>
      </div>
      <h3 className="mt-4 text-center font-semibold">{title}</h3>
      <p className="text-center text-gray-600">
        {author} ・ {genre}
      </p>
    </div>
  );
};

export default MyWritingCard;
