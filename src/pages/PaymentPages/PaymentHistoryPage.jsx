import React from "react";
import paymentsData from "../../data/payments.json"; // 결제 내역 목데이터를 가져옵니다.
import SearchNav from "../../components/SearchNav";

const PaymentHistoryPage = () => {
  return (
    <>
      <SearchNav />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            결제 내역 확인하기
          </h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300">날짜</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">상품명</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">
                  결제 수단
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300">
                  결제 금액
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentsData.map((payment, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {payment.date}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {payment.productName}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {payment.paymentMethod}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {payment.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryPage;
