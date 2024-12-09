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
import MainLayout from "./layouts/MainLayout";
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
        element: <MainPage />,
      },
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "pilsa/:id",
            element: <PilsaPage />,
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
