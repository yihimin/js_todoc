import React from "react";

const MyWritingCard = ({
  image,
  title,
  author,
  genre,
  isEditing,
  isChecked,
  onCheck,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-[160px] h-[160px] rounded-full bg-pink-200 object-cover"
        />
        {isEditing && (
          <div
            className={`absolute top-2 right-0 w-8 h-8 rounded-full border-2 border-customGreen flex items-center justify-center cursor-pointer ${
              isChecked ? "bg-customGreen" : "bg-white"
            }`}
            onClick={onCheck}
          >
            {isChecked && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            )}
          </div>
        )}
      </div>
      <h3 className="mt-[25px] text-center text-xl font-semibold">{title}</h3>
      <p className="mt-[10px] text-center text-[#8a8a8a]">
        {author} ・ {genre}
      </p>
    </div>
  );
};

export default MyWritingCard;
