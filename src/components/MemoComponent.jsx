// components/MemoComponent.jsx
import React from "react";

const MemoComponent = () => {
  return (
    <div className="flex justify-center items-center mt-[64.23px]">
      <div>
        <textarea
          className="w-[1032px] h-[360px] px-9 py-10 rounded-[10px] border border-[#8a8a8a] justify-center items-center inline-flex text-[#0f0f0f] text-base font-normal"
          placeholder="필사하면서 생각난 것들을 자유롭게 메모해 보세요."
        ></textarea>
      </div>
    </div>
  );
};

export default MemoComponent;
