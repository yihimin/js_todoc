import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../data/users.json"; // 사용자 데이터를 가져옵니다.
import bcrypt from "bcryptjs"; // bcryptjs 라이브러리를 사용합니다.

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]); // 2024.10.04 이준우 - API로부터 사용자 데이터를 저장할 상태
  const navigate = useNavigate();

  // 2024.10.04 이준우 - 사용자 데이터를 가져오는 API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, []); // 페이지 로드 시 한 번만 호출

  const handleLogin = (e) => {
    e.preventDefault();

    // 사용자가 입력한 이메일과 일치하는 사용자 데이터 찾기
    const user = users.find((user) => user.email === email);

    if (user) {
      // 비밀번호 비교
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          setError("로그인 중 오류가 발생했습니다.");
        } else if (isMatch) {
          alert("로그인 성공");
          // 로그인 성공 후 리디렉션 등 원하는 동작을 추가할 수 있습니다.
          navigate("/"); // 예시: 메인 페이지로 리디렉션
        } else {
          setError("이메일 또는 비밀번호가 잘못되었습니다.");
        }
      });
    } else {
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow w-full max-w-md">
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
