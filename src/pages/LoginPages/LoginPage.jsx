import React, { useState } from "react";
import SignUpNav from "../../components/SignupNav";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 예시 사용자 데이터
    const userData = {
      email: "test@example.com",
      password: "password123",
    };

    // 이메일과 비밀번호 유효성 검사
    if (email === userData.email && password === userData.password) {
      alert("로그인 성공");
      // 로그인 성공 후 리디렉션 등 원하는 동작을 추가할 수 있습니다.
    } else {
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div>
      <SignUpNav />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                이메일
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">자동 로그인</span>
              </label>
              <a
                className="inline-block align-baseline font-bold text-sm text-customGray hover:text-customGreen"
                href="/password-reset"
              >
                비밀번호를 잊어버리셨나요?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-customGray hover:bg-customGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
