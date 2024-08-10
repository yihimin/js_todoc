import React from "react";
import SearchNav from "../../components/SearchNav";
import MyWritingList from "../../components/MyWritingList";

const Scrap = () => {
  return (
    <div>
      <SearchNav />
      <div className="flex justify-between items-center mb-8">
        <h2 className="pl-12 py-12 mt-8 text-2xl font-bold">스크랩한 글</h2>
        <button className="text-gray-600 pr-8">편집</button>
      </div>
      <div className="px-8">
        <MyWritingList />
      </div>
    </div>
  );
};

export default Scrap;
