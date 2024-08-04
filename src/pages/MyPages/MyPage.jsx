import React from "react";
import SearchNav from "../../components/SearchNav";
import CheckIcon from "../../assets/check_icon.svg";
import HeartIcon from "../../assets/heart_icon.svg";
import MemoIcon from "../../assets/memo_icon.svg";
import PenIcon from "../../assets/pen_icon.svg";
import ProfileImg from "../../assets/profile_img.svg";
import SettingBG from "../../assets/setting_bg.svg";

const MyPage = () => {
  return (
    <div>
      <SearchNav />
      <div className="flex flex-col justify-center items-center relative">
        <img src={ProfileImg} alt="ProfileImg" className="mt-[140.38px]" />
        <img
          src={SettingBG}
          alt="SettingImg"
          className="absolute mt-[266.87px] ml-[140.75px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[16.23px] text-[#0f0f0f] text-4xl font-bold">
          user1234
        </div>
        <div className="mt-[23.42px] flex text-[15px] text-[#9b9b9b]">
          <div className="mr-[16px]">로그아웃</div>
          <div className="mr-[16px]">|</div>
          <div className="">결제 내역 확인</div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[82.48px]">
        <div className="p-[20px_18px]">
          <div className="p-[0px_50px] flex flex-col justify-center items-center">
            <img src={PenIcon} alt="PenIcon" className="mb-[10px]" />
            <div className="text-xl font-medium text-[#8a8a8a]">
              필사 중인 글
            </div>
          </div>
        </div>
        <div className="p-[20px_18px]">
          <div className="p-[0px_50px] flex flex-col justify-center items-center">
            <img src={CheckIcon} alt="CheckIcon" className="mb-[10px]" />
            <div className="text-xl font-medium text-[#8a8a8a]">
              필사 완료된 글
            </div>
          </div>
        </div>
        <div className="p-[20px_18px]">
          <div className="p-[0px_50px] flex flex-col justify-center items-center">
            <img src={HeartIcon} alt="HeartIcon" className="mb-[10px]" />
            <div className="text-xl font-medium text-[#8a8a8a]">
              스크랩 한 글
            </div>
          </div>
        </div>
        <div className="p-[20px_18px]">
          <div className="p-[0px_50px] flex flex-col justify-center items-center">
            <img src={MemoIcon} alt="MemoIcon" className="mb-[10px]" />
            <div className="text-xl font-medium text-[#8a8a8a]">
              메모 모아보기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
