import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SimpleNav from "../components/SimpleNav";
import { DataApiContext } from "../services/DataApiContext";
import PaginationButtons from "../components/PaginationButtons"; // 페이지 버튼 컴포넌트
import BookItem from "../components/BookItem"; // 책 아이템 컴포넌트

const MainPage = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [booksInfo, setBooksInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dataApi = useContext(DataApiContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await dataApi.getBooks();
        setBooksInfo(books);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
      } finally {
        setLoading(false); // 로딩 상태 업데이트
      }
    };

    fetchData();
  }, [dataApi]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booksInfo.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(booksInfo.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleImageClick = (id) => {
    navigate(`/pilsa/${id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold">
          데이터를 불러오는 중입니다...
        </div>
      </div>
    );
  }

  return (
    <div>
      <SimpleNav />
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1280px] mx-auto">
        <section
          className="current-writing flex flex-col space-y-9"
          aria-label="현재 필사 중인 글"
        >
          {/* 섹션 헤더 */}
          <div className="flex justify-between mt-20">
            <h2 className="text-2xl font-bold">오늘은 이런 글 어때요?</h2>
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
            />
          </div>

          {/* 책 리스트 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {currentItems.map((writing, index) => (
              <BookItem
                key={index}
                book={writing}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </section>
        <div className="mb-20"></div>
      </div>
    </div>
  );
};

export default MainPage;
