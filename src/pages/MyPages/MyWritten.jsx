import React from "react";
import SearchNav from "../../components/SearchNav";
import MyWritingList from "../../components/MyWritingList";

const MyWritten = () => {
  return (
    <div>
      <SearchNav />
      <div className="flex justify-between items-center mb-8">
        <h2 className="pl-12 py-12 mt-8 text-2xl font-bold">필사 완료한 글</h2>
      </div>
      <div className="px-8">
        <MyWritingList />
      </div>
    </div>
  );
};

export default MyWritten;
