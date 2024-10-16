import React from "react";
import SearchNav from "../../components/SearchNav";
import MyWritingList from "../../components/MyWritingList";

const MyWritting = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchNav />
        <div className="mt-[108px] mb-[270px] w-[1040px]">
                <h2 className="mb-[12px] text-[32px] font-bold">필사 중인 글</h2>
                <MyWritingList/>
        </div>
    </div>
  );
};

export default MyWritting;
