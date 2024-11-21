import React, { useState, useContext, useEffect } from "react";
import SearchNav from "../components/SearchNav";
import SearchIcon from "../assets/search_icon2.svg";
import DownIcon from "../assets/down_icon.svg";
import HeartButton from "../components/HeartButton";
import { DataApiContext } from "../services/DataApiContext"; // DataApiContext import

const SearchPage = () => {
  const [isDownClicked, setIsDownClicked] = useState(false);
  const [selectType, setSelectType] = useState(1);
  const [booksInfo, setBooksInfo] = useState([]);
  const [currentLike, setCurrentLike] = useState([]);
  
  // DataApiContext에서 데이터를 가져옵니다.
  const dataApi = useContext(DataApiContext);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await dataApi.getBooks();
        setBooksInfo(booksData);
        setCurrentLike(booksData.map(() => false)); // 각 책에 대해 초기 좋아요 상태 설정
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchBooks();
  }, [dataApi]);

  const handleDownClick = () => {
    setIsDownClicked(!isDownClicked);
  };

  const categoryList = [
    {
      id: 1,
      name: "전체",
      type: "ALL",
    },
    {
      id: 2,
      name: "소설",
      type: "",
    },
    {
      id: 3,
      name: "인문학",
      type: "",
    },
    {
      id: 4,
      name: "칼럼",
      type: "",
    },
    {
      id: 5,
      name: "시",
      type: "",
    },
  ];

  const categoryMap = categoryList.reduce((map, category) => {
    map[category.id] = category.name;
    return map;
  }, {});

  const mergedMenu = booksInfo.map((menuItem) => ({
    ...menuItem,
    categoryName: categoryMap[menuItem.categoryId] || null,
  }));

  const handleLike = (index) => {
    const currentLikes = [...currentLike];
    currentLikes[index] = !currentLikes[index];
    setCurrentLike(currentLikes);
  };

  return (
    <div>
      <SearchNav />
      <div className="mt-[176px] flex justify-center items-start">
        <div className="flex justify-between items-center relative">
          <input
            id="searchText"
            placeholder="찾고 싶은 글을 검색해보세요."
            type="text"
            className="w-[483px] h-[56px] p-[7px_27px] pl-[115px] rounded-[10px] border border-[#90a36b] transition-colors text-sm"
          />
          <div className="absolute w-[96px] ml-[15px] text-[#0f0f0f] p-[11px_18px] text-xs font-bold flex justify-between">
            <p className="mt-[2px]">
              {categoryList.find((item) => item.id === selectType).name}
            </p>
            <div className="flex">
              <img
                src={DownIcon}
                alt="DownIcon"
                className={`transition-transform duration-300 ${
                  isDownClicked ? "transform scale-y-[-1]" : ""
                }`}
                onClick={handleDownClick}
              />
              {isDownClicked && (
                <ul className="absolute w-[96px] mt-[40px] left-0 z-[1] bg-white border border-gray-200 rounded-md shadow-lg">
                  {categoryList.map((item) => (
                    <li
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectType(item.id);
                        setIsDownClicked(false);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <img
            src={SearchIcon}
            alt="SearchIcon"
            className="absolute right-[14px]"
          />
        </div>
      </div>
      <div className="mt-[86px] flex flex-col justify-center items-center">
        {mergedMenu.map((article, index) => (
          <div
            className="w-[984px] h-[132px] mb-[30px] relative"
            key={article.id}>
            <div className="h-full pl-12 flex flex-row items-center justify-center">
              <div className="pr-[140px] w-4/5">
                <div className="inline-block px-[13px] py-px bg-[#8A8A8A] rounded-[45px] text-stone-50 text-[15px] font-normal">
                  {article.categoryName}
                </div>
                <div className="text-stone-950 text-xl font-semibold">
                  {article.title}
                </div>
                <div className="text-zinc-500 text-[15px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {article.content}
                </div>
              </div>
              <HeartButton
                  currentLike={currentLike[index]}
                  handleLike={() => handleLike(index)}
                  article={article}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
