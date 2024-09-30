import React, { useState } from "react";
import MyWritingCard from "./MyWritingCard";
import BooksInfo from "../data/books_info.json";

const MyWritingList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState(BooksInfo);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setSelectedCards([]);
    }
  };

  const handleCardSelect = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((i) => i !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const handleDeleteSelected = () => {
    setCards(cards.filter((_, index) => !selectedCards.includes(index)));
    setSelectedCards([]);
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-[-40px] flex space-x-4">
        {/* 편집 버튼 */}
        <button className="text-gray-600 pr-8" onClick={handleEditClick}>
          {isEditing ? "편집완료" : "편집"}
        </button>
        {/* 삭제 버튼 */}
        {isEditing && (
          <button className="text-red-600 pr-8" onClick={handleDeleteSelected}>
            삭제
          </button>
        )}
      </div>

      {/* 카드 리스트 */}
      <div className="grid grid-cols-5 gap-6">
        {cards.map((item, index) => (
          <MyWritingCard
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            genre={item.genre}
            isEditing={isEditing}
            isChecked={selectedCards.includes(index)}
            onCheck={() => handleCardSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWritingList;
