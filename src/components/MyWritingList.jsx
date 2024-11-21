import React, { useState, useEffect, useContext } from "react";
import MyWritingCard from "./MyWritingCard";
import { DataApiContext } from "../services/DataApiContext";

const MyWritingList = () => {
  const dataApi = useContext(DataApiContext);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await dataApi.getBooks();
        setCards(books);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchBooks();
  }, [dataApi]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setSelectedCards([]); // 실제로 데이터베이스에서 삭제하는 API 추가
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
      <div className="absolute right-0 top-[-80px] flex">
        {/* 삭제 버튼 */}
        {isEditing && (
          <button className="text-red-600 font-bold underline pr-[16px]" onClick={handleDeleteSelected}>
            삭제
          </button>
        )}
        {/* 편집 버튼 */}
        <button className="text-[#b0b0b0] font-bold underline" onClick={handleEditClick}>
          {isEditing ? "편집완료" : "편집"}
        </button>
      </div>

      {/* 카드 리스트 */}
      <div className="mt-[60px] grid grid-cols-5 gap-[60px]">
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
