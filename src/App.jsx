import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PilsaPage from "./pages/PilsaPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import SignUpLayout from "./layouts/SignUpLayout";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPages/MyPage";
import PaymentInfoPage from "./pages/MyPages/PaymentInfoPage";
import UpdateInfoPage from "./pages/MyPages/UpdateInfoPage";
import LoginPage from "./pages/LoginPages/LoginPage";
import ForgotPasswordPage from "./pages/LoginPages/ForgotPasswordPage";
import PaymentPage from "./pages/PaymentPages/PaymentPage";
import MembershipCancelPage from "./pages/PaymentPages/MembershipCancelPage";
import PaymentHistoryPage from "./pages/PaymentPages/PaymentHistoryPage";
import PaymentMethodPage from "./pages/PaymentPages/PaymentMethodPage";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="pilsa" element={<PilsaPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="mypage/update-info" element={<UpdateInfoPage />} />
          <Route path="mypage/payment-info" element={<PaymentInfoPage />} />
          <Route
            path="mypage/payment-history"
            element={<PaymentHistoryPage />}
          />
          <Route path="mypage/payment-method" element={<PaymentMethodPage />} />
          <Route
            path="mypage/membership-cancel"
            element={<MembershipCancelPage />}
          />
          <Route path="password-reset" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
