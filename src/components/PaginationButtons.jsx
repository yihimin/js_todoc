// components/PaginationButtons.jsx
import React from "react";
import LeftButtonGray from "../assets/left_button_gray.svg";
import LeftButtonGreen from "../assets/left_button_green.svg";
import RightButtonGray from "../assets/right_button_gray.svg";
import RightButtonGreen from "../assets/right_button_green.svg";

const PaginationButtons = ({ currentPage, totalPages, onNext, onPrev }) => {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  return (
    <div className="h-[46px] flex">
      <img
        src={prevDisabled ? LeftButtonGray : LeftButtonGreen}
        alt="Previous"
        style={{ cursor: prevDisabled ? "default" : "pointer" }}
        onClick={!prevDisabled ? onPrev : undefined}
        className="mr-[32px]"
      />
      <img
        src={nextDisabled ? RightButtonGray : RightButtonGreen}
        alt="Next"
        style={{ cursor: nextDisabled ? "default" : "pointer" }}
        onClick={!nextDisabled ? onNext : undefined}
      />
    </div>
  );
};

export default PaginationButtons;
