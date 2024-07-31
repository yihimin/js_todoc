import React from "react";
import "./PilsaPage.css";
import SearchNav from "../components/SearchNav";
import PilsaComponent from "../components/PilsaComponent";

const PilsaPage = () => {
  return (
    <div>
      <SearchNav />
      <PilsaComponent />
      <div className="book-info">
        <div className="book-cover"></div>
        <div className="book-details">
          <h2>책 정보</h2>
          <p>“이러이러한 상황에서 위로가 되는 책 그런데 무엇무엇을 걸들인.”</p>
          <p>저자: 피터 피팅</p>
          <p>장르: 정서적 소설</p>
          <p>길이: 3장</p>
          <p>❤ 100</p>
        </div>
      </div>
    </div>
  );
};

export default PilsaPage;
