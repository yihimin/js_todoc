import React from "react";
import SearchNav from "../../components/SearchNav";
import MyWritingList from "../../components/MyWritingList";

const MyWritten = () => {
  return (
      <div className="flex flex-col justify-center items-center">
          <SearchNav/>
          <div className="mt-[108px] mb-[270px] w-[1040px]">
                  <h2 className="mb-[12px] text-[32px] font-bold">필사 완료한 글</h2>
                  <MyWritingList/> {/* 작성중이랑 DB분리 필요 */}
          </div>
      </div>
  );
};

export default MyWritten;
