import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchNav from '../../components/SearchNav';
import LandingBook from "../../assets/landing_book.png";
import LandingOffice from "../../assets/landing_office.png";

const PaymentPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/payment');
    };

    return (
        <div>
            <SearchNav/>
            <div className="flex flex-col justify-center items-center h-screen">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-[#0f0f0f] text-[32px] font-black">월 3,400원으로 시작</p>
                        <p className="text-[#8a8a8a] text-xl font-normal">글로 만나는 새로운 자기계발</p>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-[113.33px]">
                        <div className="flex flex-row">
                            <img src={LandingBook} alt="Landing Book"/>
                            <img className="ml-[263.36px]" src={LandingOffice} alt="Landing Office"/>
                        </div>
                        <div className="flex flex-row text-[#869e57] text-2xl font-medium">
                            <p className="mt-[35.05px] text-center">100여개 도서<br/>타이핑 기능 제공</p>
                            <p className="ml-[204.37px] mt-[38.09px]">오피스 테마 제공</p>
                        </div>
                        <button
                            className="w-[374px] h-[55px] rounded-[10px] mt-[113.33px] mb-[25px] bg-[#869F58] shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                            onClick={handleClick}>
                            <p className="text-[#f9f9f9] text-xl font-bold ">결제 방법 선택</p>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default PaymentPage;