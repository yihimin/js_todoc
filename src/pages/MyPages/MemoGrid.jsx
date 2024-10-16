import React, { useEffect, useState } from "react";
import MemoCard from "../../components/MemoCard";
import SearchNav from "../../components/SearchNav";
import memoData from "../../data/memos.json";
import MemoModal from "../../modal/MemoModal"

const MemoGrid = () => {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null); // 선택된 메모 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태
  const [selectedCards, setSelectedCards] = useState([]); // 선택된 메모 카드 상태
  const [modalContent, setModalContent] = useState({
      date: '',
      title: '',
      author: '',
      message: ''
  });
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setMemos(memoData);
  }, []);

  // 메모 카드 클릭 핸들러
  const handleMemoClick = (memo) => {
    if (!isEditing) {
      setSelectedMemo(memo);

      setModalContent({
        date: memo.date,
        title: memo.title,
        author: memo.author,
        message: memo.content,
      });

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

  return (
      <div className="flex flex-col justify-center items-center">
        <SearchNav/>
        <div className="mt-[108px] mb-[270px] w-[1040px]">
          {" "}
          {/* 아래 여백 추가 */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="mb-[12px] text-[32px] font-bold">메모 모아보기</h2>
            <div className="flex flex-row">
            {isEditing && (
                <button className="text-red-600 font-bold underline pr-[16px]" onClick={handleDeleteSelected}>
                  삭제
                </button>
            )}
            {/* 편집 및 삭제 버튼 */}
            <div className="flex space-x-4">
              <button className="text-[#b0b0b0] font-bold underline" onClick={handleEditClick}>
                {isEditing ? "편집완료" : "편집"}
              </button>
            </div>
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
          {isModalOpen && (
              <MemoModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  date={modalContent.date}
                  title={modalContent.title}
                  author={modalContent.author}
                  message={modalContent.message}/>
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
    <div className="mt-[60px] grid grid-cols-5 gap-[60px]">
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

export default MemoGrid;
