import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import LoginNav from "../components/LoginNav";
import { DataApiContext } from "../services/DataApiContext"; // DataApiContext import

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
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const navigate = useNavigate();
  const dataApi = useContext(DataApiContext); // DataApiContext를 통해 데이터 API 접근

  const handleSignUp = async (e) => {
    e.preventDefault();

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

    try {
      // 사용자 데이터 가져오기
      const users = await dataApi.getUsers();

      if (users.some((user) => user.email === email)) {
        setError("이미 사용 중인 이메일입니다.");
        return;
      }
      if (users.some((user) => user.nickname === nickname)) {
        setError("이미 사용 중인 닉네임입니다.");
        return;
      }

      // 회원가입 API 요청
      const response = await fetch(process.env.REACT_APP_API_BASE_URL + "/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nickname,
          email,
          password: bcrypt.hashSync(password, 10), // 비밀번호 해싱 후 전송
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
  };

  const handleNicknameCheck = async () => {
    try {
      const users = await dataApi.getUsers();

      if (users.some((user) => user.nickname === nickname)) {
        setNicknameMessage("이미 사용 중인 닉네임입니다.");
        setIsNicknameAvailable(false);
      } else {
        setNicknameMessage("사용 가능한 닉네임입니다.");
        setIsNicknameAvailable(true);
      }
    } catch (error) {
      console.error(error);
      setNicknameMessage("사용자 데이터를 불러오는 중 오류가 발생했습니다.");
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
        "영문, 숫자, 특수문자 중 2개 조합 8자 이상으로 입력하세요."
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
    <>
      <LoginNav />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg w-full max-w-md">
          <h2 className="text-[32px] font-bold mb-[34px] text-center">회원가입</h2>
          <form onSubmit={handleSignUp}>
            {/* 이메일 입력 및 오류 메시지 */}
            <div className="">
              <input
                className="w-[375px] h-[55px] border border-[#8a8a8a] rounded rounded-[10px] px-4 pb-4 pt-[15px] text-gray-700 placeholder:text-[#8a8a8a] placeholder:text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-customGreen"
                id="email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-sm ml-[5px] my-[4px] min-h-[20px] text-[#e52222]">
                <p>{emailError}</p>
              </div>
            </div>
            {/* 비밀번호 입력 및 확인 */}
            {/* ... (기존의 다른 입력 필드) */}
            <div className="flex items-center justify-center">
              <button
                className="w-[374px] h-[55px] bg-customGray hover:bg-customGreen text-white text-xl font-bold py-2 px-4 rounded rounded-[10px] focus:outline-none focus:shadow-outline"
                type="submit"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
