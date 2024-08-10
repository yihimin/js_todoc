import React from "react";
import MyWritingCard from "./MyWritingCard";
import WrittingData from "../data/writting.json";

const MyWritingList = () => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {WrittingData.map((item, index) => (
        <MyWritingCard
          key={index}
          image={item.image}
          title={item.title}
          author={item.author}
          genre={item.genre}
        />
      ))}
    </div>
  );
};

export default MyWritingList;
