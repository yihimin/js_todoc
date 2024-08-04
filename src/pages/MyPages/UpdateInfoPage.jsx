import React, {useState} from 'react';
import SearchNav from '../../components/SearchNav';
import ProfileImg from "../../assets/profile_img2.svg";
import ChangeImg from "../../assets/setting_bg.svg";

const UpdateInfoPage = () => {

    return (
        <div>
            <SearchNav/>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="w-[374px]">
                    <div className="text-black text-lg font-bold">이메일</div>
                    <div className="text-black text-[15px] font-normal mt-[16px]">xxxxxx@gmail.com</div>
                    <div className="text-black text-lg font-bold mt-[36.21px]">프로필 이미지</div>
                        <div className="flex flex-col justify-center items-start relative">
                            <img src={ProfileImg} alt="ProfileImg" className="mt-[16px]"/>
                            <img
                                src={ChangeImg}
                                alt="ChangeImg"
                                className="absolute mt-[266.87px] ml-[140.75px]"/>
                        </div>
                    <div className="text-black text-lg font-bold mt-[13.74px]">닉네임</div>
                    <div className="flex flex-row space-x-4 mt-[16px]">
                        <textarea
                            className="w-[256px] h-[55px] rounded-[10px] border border-[#8a8a8a] text-[#8a8a8a] text-sm flex justify-between items-center p-[15px_16px]">
                            닉네임(2자 이상)
                        </textarea>
                        <button className="w-[102px] h-[55px] rounded-[10px] bg-[#869e57] text-white text-[15px]">
                            중복 확인
                        </button>
                    </div>
                    <div className="text-sm text-[#16b94c] mt-[8px]">사용 가능한 닉네임입니다.</div> {/* 상황별 메세지 다르게 or hidden */}
                    <div>
                        <div className="text-black text-lg font-bold mt-[32.67px]">비밀번호</div>
                        <button
                            className="w-[102px] h-[55px] rounded-[10px] border border-[#8a8a8a] text-[#8a8a8a] text-[15px] mt-[16px]">변경
                            하기
                        </button>
                    </div>
                    <button
                        className="w-[374px] h-[55px] rounded-[10px] bg-[#b0b0b0] text-[#f9f9f9] text-xl font-bold mt-[24.34px]">저장하기
                    </button>
                    <div className="flex justify-end">
                        <button className="text-sm text-[#b0b0b0] underline mt-[17.87px]">
                            회원 탈퇴하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInfoPage;