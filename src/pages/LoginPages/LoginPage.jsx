import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { DataApiContext } from "../../services/DataApiContext"; // DataApiContext를 import

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // DataApiContext에서 데이터 가져오기
  const dataApi = useContext(DataApiContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 사용자 데이터를 불러옵니다.
      const users = await dataApi.getUsers();

      // 사용자가 입력한 이메일과 일치하는 사용자 데이터 찾기
      const user = users.find((user) => user.email === email);

      if (user) {
        // 비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          alert("로그인 성공");
          navigate("/"); // 메인 페이지로 리디렉션
        } else {
          setError("이메일 또는 비밀번호가 잘못되었습니다.");
        }
      } else {
        setError("이메일 또는 비밀번호가 잘못되었습니다.");
      }
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg w-full max-w-md">
          <h2 className="text-[32px] text-[#0f0f0f] font-bold text-center">로그인</h2>
          <form onSubmit={handleLogin}>
            <div className="mt-[34px] mb-[20.5px]">
              <input
                className="w-[375px] h-[55px] border border-[#8a8a8a] rounded rounded-[10px] px-4 pb-4 pt-[15px] text-gray-700 placeholder:text-[#8a8a8a] placeholder:text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-customGreen"
                id="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <input
                className="w-[375px] h-[55px] border border-[#8a8a8a] rounded rounded-[10px] px-4 pb-4 pt-[15px] text-gray-700 placeholder:text-[#8a8a8a] placeholder:text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-customGreen"
                id="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-sm my-[10px] min-h-[20px] text-[#e52222]">
              <p>{error}</p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">자동 로그인</span>
              </label>
              <a
                className="inline-block align-baseline font-normal text-sm text-customGray hover:text-customGreen underline"
                href="/password-reset"
              >
                비밀번호를 잊어버리셨나요?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-[374px] h-[55px] bg-customGray hover:bg-customGreen text-white text-xl font-bold py-2 px-4 rounded rounded-[10px] focus:outline-none focus:shadow-outline"
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
