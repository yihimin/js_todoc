import React, {useState} from 'react';
import SearchNav from '../../components/SearchNav';
import CheckIcon from "../../assets/check_icon.svg";
import HeartIcon from "../../assets/heart_icon.svg";
import MemoIcon from "../../assets/memo_icon.svg";
import PenIcon from "../../assets/pen_icon.svg";
import ProfileImg from "../../assets/profile_img.svg";
import SettingBG from "../../assets/setting_bg.svg";
import SettingLine from "../../assets/setting_line.svg";

const PaymentPage = () => {

    return (
        <div>
            <SearchNav/>
            <div className="mt-[107.85px] ml-[198.22px] text-[32px] text-[#0f0f0f] font-bold">결제 방법 선택</div>
            <div className="flex flex-col justify-center items-center relative">
                <div className="w-[374px] h-[64px] mt-[61.15px] rounded-[10px] border border-[#8a8a8a]">카드 결제</div>
                <div className="w-[374px] h-[64px] mt-[10px] rounded-[10px] border border-[#8a8a8a]">카카오페이</div>
                <div className="w-[374px] h-[64px] mt-[10px] rounded-[10px] border border-[#8a8a8a]">네이버페이</div>
                <div className="w-[374px] h-[64px] mt-[10px] rounded-[10px] border border-[#8a8a8a]">토스페이</div>
            </div>
        </div>
    );
};

export default PaymentPage;