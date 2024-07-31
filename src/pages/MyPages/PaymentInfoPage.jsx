import React from "react";
import { useNavigate } from "react-router-dom";
import SearchNav from "../../components/SearchNav";

const PaymentInfoPage = () => {
  const navigate = useNavigate();

  const handlePaymentHistory = () => {
    navigate("/mypage/payment-history");
  };

  const handlePaymentMethod = () => {
    navigate("/mypage/payment-method");
  };

  const handleMembershipCancel = () => {
    navigate("/mypage/membership-cancel");
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
              onClick={handleMembershipCancel}
            >
              멤버쉽 해지하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfoPage;
