import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchNav from "../../components/SearchNav";
import Modal from '../../modal/Modal';
import ExpandRight from "../../assets/expand_right.svg"

const PaymentInfoPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    actionName: '',
    closeName: ''
  });

  const openModal = ({title = '멤버쉽을 해지할까요?', message = '해지해도 2024.00.00.까지 유지됩니다.', actionName = '해지하기', closeName = '유지하기'}) => {
    setModalContent({ title, message, actionName, closeName });
    setIsModalOpen(true);
  };

  const handleMemberShipCancle = () => {
    navigate("/mypage/membership-start");
    // 멤버쉽 취소 API 연결 필요
  }

  const closeModal = () => setIsModalOpen(false);

  const handlePaymentHistory = () => {
    navigate("/mypage/payment-history");
  };

  const handlePaymentMethod = () => {
    navigate("/mypage/payment-method");
  };

  return (
    <>
      <SearchNav />
      <div className="flex justify-center h-screen">
        <div className="rounded-lg flex flex-col justify-center">
          <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-[37px] whitespace-nowrap">
            다음 결제일은{" "}
            <span className="text-customGreen">2024년 03월 26일</span> 이에요.
          </h2>
          <div className="w-[374px] h-[116px] rounded-[10px] border border-[#9b9b9b]">
            <div
                className="py-[15.5px] pl-[20px] text-[15px] text-[#8a8a8a] flex justify-between items-center hover:text-customGreen cursor-pointer"
                onClick={handlePaymentHistory}>
              <span>결제 내역 확인하기</span>
              <img className="pr-[16px]"
                   src={ExpandRight}/>
            </div>
            <div className="mx-2 w-[356px] h-[0px] border border-[#b0b0b0]"></div>
            <div
                className="py-[15.5px] pl-[20px] text-[15px] text-[#8a8a8a] flex justify-between items-center hover:text-customGreen cursor-pointer"
                onClick={handlePaymentMethod}>
              <span>결제 수단 변경</span>
              <img className="pr-[16px]"
                   src={ExpandRight}/>
            </div>
          </div>
          </div>
          <div className="flex justify-end">
            <button
              className="mt-[22px] mr-[29px] text-[#b0b0b0] text-[15px] hover:text-red-500 focus:outline-none underline"
              onClick={openModal}>
              멤버쉽 해지하기
            </button>
          </div>
        </div>
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onAction={handleMemberShipCancle}
            title={modalContent.title}
            message={modalContent.message}
            actionName={modalContent.actionName}
            closeName={modalContent.closeName}>
        </Modal>
      </div>
    </>
  );
};

export default PaymentInfoPage;
