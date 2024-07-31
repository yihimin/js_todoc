import React, { useState } from "react";
import users from "../../data/users.json"; // 목데이터 파일을 가져옵니다.

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("이메일을 입력하세요.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("유효한 이메일 주소를 입력하세요.");
      return;
    }

    // 예시 사용자 데이터
    const existingEmails = users.map((user) => user.email); // Example existing emails

    if (!existingEmails.includes(email)) {
      setError("가입한 적 없는 이메일입니다.");
      return;
    }

    // 에러 메시지 초기화 및 비밀번호 재설정 로직
    setError("");
    setMessage("비밀번호 재설정 이메일이 전송되었습니다.");

    // 실제 비밀번호 재설정 이메일을 보내는 로직을 추가
    // 예를 들어, API 호출을 통해 비밀번호 재설정 이메일을 보낼 수 있습니다.
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">비밀번호 재설정</h2>
          <p className="mb-4">
            가입하신 이메일 주소를 입력해주세요.
            <br />
            이메일 주소로 비밀번호 재설정 메일이 발송됩니다.
          </p>
          <form onSubmit={handlePasswordReset}>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-customGray hover:bg-customGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                이메일 전송하기
              </button>
            </div>
            {message && (
              <p className="text-green-500 text-sm mt-4 text-center">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
