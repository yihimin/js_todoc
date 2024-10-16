import React from "react";
import paymentsData from "../../data/payments.json"; // 결제 내역 목데이터를 가져옵니다.
import SearchNav from "../../components/SearchNav";

const PaymentHistoryPage = () => {
  return (
    <>
      <SearchNav />
      <div className="flex flex-col items-center justify-center">
        <div className="w-[1040px] mt-[108px] mb-[270px]">
          <h2 className="text-[32px] font-bold mb-6">
            결제 내역 확인
          </h2>
        <div className="flex items-center justify-center">
          <table className="w-[1032px] mt-[36px] bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-[#0f0f0f] text-xl">날짜</th>
                <th className="py-2 px-4 border-b-2 border-[#0f0f0f] text-xl">상품명</th>
                <th className="py-2 px-4 border-b-2 border-[#0f0f0f] text-xl">
                  결제 수단
                </th>
                <th className="py-2 px-4 border-b-2 border-[#0f0f0f] text-xl">
                  결제 금액
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentsData.map((payment, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border-b border-white text-center text-[#8a8a8a]">
                    {payment.date}
                  </td>
                  <td className="py-3 px-4 border-b border-white text-center text-[#8a8a8a]">
                    {payment.productName}
                  </td>
                  <td className="py-3 px-4 border-b border-white text-center text-[#8a8a8a]">
                    {payment.paymentMethod}
                  </td>
                  <td className="py-3 px-4 border-b border-white text-center text-[#8a8a8a]">
                    {payment.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryPage;
