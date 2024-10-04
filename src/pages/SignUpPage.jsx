import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";
import bcrypt from "bcryptjs";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false); // 닉네임 사용 가능 여부

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("이메일을 입력하세요.");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("유효한 이메일 주소를 입력하세요.");
      return;
    } else {
      setEmailError("");
    }
    if (!nickname || nickname.length < 2) {
      setError("닉네임은 2자 이상이어야 합니다.");
      return;
    }
    if (
      !password ||
      !/^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        password
      )
    ) {
      setError(
        "비밀번호는 영문, 숫자, 특수문자 중 2개 조합 8자 이상이어야 합니다."
      );
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!phone) {
      setError("휴대폰 번호를 입력하세요.");
      return;
    }
    if (!verificationCode) {
      setError("인증 번호를 입력하세요.");
      return;
    }
    if (!termsAccepted) {
      setError("이용약관에 동의해야 합니다.");
      return;
    }

    if (users.some((user) => user.email === email)) {
      setError("이미 사용 중인 이메일입니다.");
      return;
    }
    if (users.some((user) => user.nickname === nickname)) {
      setError("이미 사용 중인 닉네임입니다.");
      return;
    }

    // 2024.10.04 이준우 추가  - api
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nickname,
          email,
          password,
          phone,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } else {
        setError(data.msg || "회원가입 중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
      setError("서버와의 통신에 실패했습니다.");
    }
    /* 
    users.push({
      email,
      nickname,
      password: bcrypt.hashSync(password, 10),
      phone,
    });

    setError("");
    alert("가입이 완료되었습니다.");
    navigate("/login");
    */
  };
  
  const handleNicknameCheck = () => {
    if (users.some((user) => user.nickname === nickname)) {
      setNicknameMessage("이미 사용 중인 닉네임입니다.");
      setIsNicknameAvailable(false);
    } else {
      setNicknameMessage("사용 가능한 닉네임입니다.");
      setIsNicknameAvailable(true);
    }
      
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (
      !/^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        newPassword
      )
    ) {
      setPasswordError(
        "비밀번호는 영문, 숫자, 특수문자 중 2개 조합 8자 이상이어야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);
    if (newPasswordConfirm === password) {
      setPasswordMessage("비밀번호가 일치합니다.");
    } else {
      setPasswordMessage("비밀번호가 일치하지 않습니다.");
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
          <form onSubmit={(e) => e.preventDefault()}>
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
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div className="mb-4 flex items-end">
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nickname"
                >
                  닉네임(2자 이상)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nickname"
                  type="text"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                {nicknameMessage && (
                  <p className={`text-sm mt-1 ${isNicknameAvailable ? 'text-green-500' : 'text-red-500'}`}>
                    {nicknameMessage}
                  </p>
                )}
              </div>
              <button
                className="ml-4 bg-customGreen text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline h-[40px] flex items-center"
                type="button"
                onClick={handleNicknameCheck}
              >
                중복 확인
              </button>
            </div>
            <div className="mb-4">
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
                placeholder="비밀번호 (영문, 숫자, 특수문자 중 2개 조합 8자 이상)"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="passwordConfirm"
              >
                비밀번호 확인
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordConfirm"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
              />
              {passwordMessage && (
                <p className={`text-sm mt-1 ${passwordMessage === '비밀번호가 일치합니다.' ? 'text-green-500' : 'text-red-500'}`}>
                  {passwordMessage}
                </p>
              )}
            </div>
            <div className="mb-4 flex items-end">
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  휴대폰 번호
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="휴대폰 번호"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                className="ml-4 bg-customGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                인증 받기
              </button>
            </div>
            <div className="mb-4 flex items-end">
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="verificationCode"
                >
                  인증 번호
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="verificationCode"
                  type="text"
                  placeholder="인증 번호"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <button
                className="ml-4 bg-customGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                확인
              </button>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span className="text-sm">(필수) 이용약관 동의</span>
              </label>
              <label className="flex items-center mt-2">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  checked={newsletterAccepted}
                  onChange={(e) => setNewsletterAccepted(e.target.checked)}
                />
                <span className="text-sm">(선택) 뉴스레터 수신 동의</span>
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-customGray hover:bg-customGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignUp}
              >
                가입 하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
