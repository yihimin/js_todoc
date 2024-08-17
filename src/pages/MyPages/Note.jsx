import React from "react";
import SearchNav from "../../components/SearchNav";

const Note = () => {
  return (
    <div>
      <SearchNav />
      <div className="flex justify-between items-center mb-8">
        <h2 className="pl-12 py-12 mt-8 text-2xl font-bold">노트</h2>
      </div>
      <div className="px-8"></div>
    </div>
  );
};

export default Note;
