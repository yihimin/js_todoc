import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchNav from "../../components/SearchNav";
import Modal from '../../components/Modal';

const PaymentInfoPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    button1: '',
    button2: ''
  });

  const openModal = (title, message, button1, button2) => {
    setModalContent({ title, message, button1, button2 });
    setIsModalOpen(true);
  };

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
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow w-full max-w-md text-center">
          <h2 className="text-xl font-bold mb-6">
            다음 결제일은{" "}
            <span className="text-customGreen">2024년 03월 26일</span>이에요.
          </h2>
          <div
            className="py-2 px-4 border rounded text-gray-700 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
            onClick={handlePaymentHistory}
          >
            <span>결제 내역 확인하기</span>
            <span className="text-gray-400">{">"}</span>
          </div>
          <div
            className="mb-4 py-2 px-4 border rounded text-gray-700 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
            onClick={handlePaymentMethod}
          >
            <span>결제 수단 변경</span>
            <span className="text-gray-400">{">"}</span>
          </div>
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-red-500 focus:outline-none underline"
              onClick={() => openModal('멤버쉽을 해지할까요?', '해지해도 2024.00.00.까지 유지됩니다.','해지하기','유지하기')}>
              멤버쉽 해지하기
            </button>
          </div>
        </div>
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={modalContent.title}
            message={modalContent.message}
            button1={modalContent.button1}
            button2={modalContent.button2}>
        </Modal>
      </div>
    </>
  );
};

export default PaymentInfoPage;
