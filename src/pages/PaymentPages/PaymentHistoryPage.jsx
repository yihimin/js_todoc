import React, { useContext, useEffect, useState } from "react";
import SearchNav from "../../components/SearchNav";
import { DataApiContext } from "../../services/DataApiContext"; // DataApiContext import

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState([]);
  const dataApi = useContext(DataApiContext); // DataApiContext에서 데이터 API 가져오기

  useEffect(() => {
    // DataApi를 통해 결제 내역 데이터를 가져옵니다.
    const fetchPayments = async () => {
      try {
        const paymentsData = await dataApi.getPayments(); // DataApi에서 결제 데이터를 가져오는 메소드 사용
        setPayments(paymentsData);
      } catch (error) {
        console.error("결제 데이터를 불러오는데 오류가 발생했습니다.", error);
      }
    };
    fetchPayments();
  }, [dataApi]);

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
                {payments.length > 0 ? (
                  payments.map((payment, index) => (
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-3 px-4 text-center text-[#8a8a8a]">
                      결제 내역이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryPage;
