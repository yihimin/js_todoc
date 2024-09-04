import React, { useEffect, useState } from "react";
import MemoCard from "../../components/MemoCard";
import SearchNav from "../../components/SearchNav";
import memoData from "../../data/memos.json";

const MemoGrid = () => {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null); // 선택된 메모 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태
  const [selectedCards, setSelectedCards] = useState([]); // 선택된 메모 카드 상태

  useEffect(() => {
    setMemos(memoData);
  }, []);

  // 메모 카드 클릭 핸들러
  const handleMemoClick = (memo) => {
    if (!isEditing) {
      setSelectedMemo(memo);
      setIsModalOpen(true);
    }
  };

  // 편집 모드 토글 핸들러
  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setSelectedCards([]); // 편집 모드 해제 시 선택된 카드 초기화
    }
  };

  // 메모 카드 선택 핸들러
  const handleCardSelect = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((i) => i !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  // 선택된 메모 카드 삭제 핸들러
  const handleDeleteSelected = () => {
    setMemos(memos.filter((_, index) => !selectedCards.includes(index)));
    setSelectedCards([]);
    setIsEditing(false);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMemo(null);
  };

  return (
    <div>
      <SearchNav />
      <div className="container mx-auto pb-8">
        {" "}
        {/* 아래 여백 추가 */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="pl-12 py-12 mt-8 text-2xl font-bold">메모 모아보기</h2>
          {/* 편집 및 삭제 버튼 */}
          <div className="flex space-x-4 pr-8">
            <button className="text-gray-600" onClick={handleEditClick}>
              {isEditing ? "편집완료" : "편집"}
            </button>
            {isEditing && (
              <button className="text-red-600" onClick={handleDeleteSelected}>
                삭제
              </button>
            )}
          </div>
        </div>
        <MemoList
          memos={memos}
          onMemoClick={handleMemoClick}
          isEditing={isEditing}
          selectedCards={selectedCards}
          onCardSelect={handleCardSelect}
        />
        {/* 모달 컴포넌트 */}
        {isModalOpen && selectedMemo && (
          <Modal memo={selectedMemo} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

// MemoList 컴포넌트
const MemoList = ({
  memos,
  onMemoClick,
  isEditing,
  selectedCards,
  onCardSelect,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
      {memos.map((memo, index) => (
        <MemoCard
          key={index}
          memo={memo}
          onClick={() => onMemoClick(memo)}
          isEditing={isEditing}
          isChecked={selectedCards.includes(index)}
          onCheck={() => onCardSelect(index)}
        />
      ))}
    </div>
  );
};

// Modal 컴포넌트 (테이프 이미지 없이)
const Modal = ({ memo, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-80">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">{memo.content}</p>
          <h3 className="text-lg font-bold mt-4">{memo.title}</h3>
          <p className="text-sm text-gray-500">
            {memo.author} · {memo.genre}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemoGrid;
