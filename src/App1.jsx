// src/App.js

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { DataApiProvider } from "./services/DataApiContext"; // DataApiProvider 추가
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./services/UserContext"; // UserProvider 추가
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
import MembershipStartPage from "./pages/PaymentPages/MembershipStartPage";
import PaymentHistoryPage from "./pages/PaymentPages/PaymentHistoryPage";
import PaymentMethodPage from "./pages/PaymentPages/PaymentMethodPage";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./layouts/MainLayout";
import MyWritting from "./pages/MyPages/MyWritting";
import MyWritten from "./pages/MyPages/MyWritten";
import Scrap from "./pages/MyPages/Scrap";
import MemoGrid from "./pages/MyPages/MemoGrid";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const contextClass = {
  success: "bg-[#869F58]",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const ToastProvider = () => (
  <>
    <Outlet />
    <ToastContainer
      toastClassName={(context) =>
        contextClass[context?.type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-sm font-white font-med block p-3"}
      position="bottom-left"
      autoClose={3000}
    />
  </>
);

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <ToastProvider />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "pilsa/:id",
            element: <PilsaPage />,
          },
          {
            path: "main",
            element: <MainPage />,
          },
          {
            path: "search",
            element: <SearchPage />,
          },
          {
            path: "signup",
            element: <SignUpPage />,
          },
          {
            path: "mypage",
            element: <MyPage />,
          },
          {
            path: "login",
            element: (
              <SignUpLayout>
                <LoginPage />
              </SignUpLayout>
            ),
          },
          {
            path: "payment",
            element: <PaymentPage />,
          },
          {
            path: "mypage/update-info",
            element: <UpdateInfoPage />,
          },
          {
            path: "mypage/payment-info",
            element: <PaymentInfoPage />,
          },
          {
            path: "mypage/payment-history",
            element: <PaymentHistoryPage />,
          },
          {
            path: "mypage/payment-method",
            element: <PaymentMethodPage />,
          },
          {
            path: "mypage/membership-start",
            element: <MembershipStartPage />,
          },
          {
            path: "password-reset",
            element: <ForgotPasswordPage />,
          },
          {
            path: "mypage/writting",
            element: <MyWritting />,
          },
          {
            path: "mypage/written",
            element: <MyWritten />,
          },
          {
            path: "mypage/scrap",
            element: <Scrap />,
          },
          {
            path: "mypage/notes",
            element: <MemoGrid />,
          },
        ],
        errorElement: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <DataApiProvider>
      {" "}
      {/* DataApiProvider로 애플리케이션을 감쌈 */}
      <UserProvider>
        {" "}
        {/* UserProvider로 애플리케이션을 감쌈 */}
        <RouterProvider router={router} />
      </UserProvider>
    </DataApiProvider>
  );
}

export default App;
