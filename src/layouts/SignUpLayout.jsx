import React from "react";
import SignUpNav from "../components/SignupNav"; // 공통 네비게이션 바

const SignUpLayout = ({ children }) => {
  return (
    <div>
      <SignUpNav />
      {children}
    </div>
  );
};

export default SignUpLayout;
