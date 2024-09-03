import React, {useState} from 'react';
import SearchNav from '../../components/SearchNav';
import KaKaoPayIcon from "../../assets/kakaopay_icon.png";
import NaverPayIcon from "../../assets/naver_icon.svg";
import TossPayIcon1 from "../../assets/tosspay_icon1.png";
import TossPayIcon2 from "../../assets/tosspay_icon2.svg";

const PaymentPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItem, setSelected] = useState("");

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSelect = (option) => {
        if (selectedItem === option) {
            setSelected(null);
        } else {
            setSelected(option);
        }
    };

    return (
        <div>
            <SearchNav/>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex justify-start items-start">
                    <p className="text-[32px] text-[#0f0f0f] font-bold">결제 방법 선택</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="items-center mt-[61.15px]">
                        <div
                            className={`w-[374px] h-[64px] rounded-[10px] border ${selectedItem === "카드 결제" ? "pl-[32.79px] pt-[17px] pb-[17px] border-[#869e57] border-2" : "pl-[33.29px] pt-[17.5px] pb-[17.5px] border-[#8a8a8a] border-1"}`}
                            onClick={() => handleSelect("카드 결제")}>
                            <p className={`text-xl ${selectedItem === "카드 결제" ? "text-[#869e57] font-semibold" : "text-[#8a8a8a] font-normal"}`}>카드 결제</p>
                        </div>
                        <div
                            className={`flex w-[374px] h-[64px] mt-[10px] rounded-[10px] border ${selectedItem === "카카오페이" ? "pl-[32.79px] pt-[17px] pb-[17px] border-[#869e57] border-2" : "pl-[33.29px] pt-[17.5px] pb-[17.5px] border-[#8a8a8a] border-1"}`}
                            onClick={() => handleSelect("카카오페이")}>
                            <p className={`text-xl ${selectedItem === "카카오페이" ? "text-[#869e57] font-semibold" : "text-[#8a8a8a] font-normal"}`}>카카오페이</p>
                            <img
                                src={KaKaoPayIcon}
                                alt="KaKaoPayIcon"
                                className="ml-[8px] w-[66.52px] h-[27px] object-contain"/>
                        </div>
                        <div
                            className={`flex w-[374px] h-[64px] mt-[10px] rounded-[10px] border ${selectedItem === "네이버페이" ? "pl-[32.79px] pt-[17px] pb-[17px] border-[#869e57] border-2" : "pl-[33.29px] pt-[17.5px] pb-[17.5px] border-[#8a8a8a] border-1"}`}
                            onClick={() => handleSelect("네이버페이")}>
                            <p className={`text-xl ${selectedItem === "네이버페이" ? "text-[#869e57] font-semibold" : "text-[#8a8a8a] font-normal"}`}>네이버페이</p>
                            <img
                                src={NaverPayIcon}
                                alt="NaverPayIcon"
                                className="ml-[8px] w-[86.63px] h-[27px] object-contain"/>
                        </div>
                        <div
                            className={`flex w-[374px] h-[64px] mt-[10px] rounded-[10px] border ${selectedItem === "토스페이" ? "pl-[32.79px] pt-[17px] pb-[17px] border-[#869e57] border-2" : "pl-[33.29px] pt-[17.5px] pb-[17.5px] border-[#8a8a8a] border-1"}`}
                            onClick={() => handleSelect("토스페이")}>
                            <p className={`text-xl ${selectedItem === "토스페이" ? "text-[#869e57] font-semibold" : "text-[#8a8a8a] font-normal"}`}>토스페이</p>
                            <img
                                src={TossPayIcon1}
                                alt="TossPayIcon1"
                                className="ml-[8px] w-[29.16px] h-[27px] object-contain"/>
                            <img
                                src={TossPayIcon2}
                                alt="TossPayIcon2"
                                className="ml-[4px] w-[117.81px] h-[27px] object-contain"/>
                        </div>
                    </div>
                    <div className="flex justify-end mt-[35px]">
                        <alt className="text-xl text-[#0f0f0f] font-bold">3,400원 /월</alt>
                    </div>
                    <div className="flex items-center mt-[45px]">
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mt-[3px] mr-[6px] h-[16px] w-[16px]"
                        />
                        <p className="text-[#8a8a8a]">(필수) 위 내용을 확인하였으며 동의합니다</p>
                    </div>
                    <button className="w-[374px] h-[55px] rounded-[10px] bg-[#b0b0b0] mt-[16px] hover:bg-[#869F58]">
                        <p className="text-[#f9f9f9] text-xl font-bold ">결제하기</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;