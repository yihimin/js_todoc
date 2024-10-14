import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUsers } from "../services/userService";

// UserContext 생성
const UserContext = createContext();

// 사용자 데이터를 제공하는 Provider 컴포넌트
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError("사용자 데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };
    
    loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

// UserContext를 사용하는 커스텀 훅
export const useUserContext = () => useContext(UserContext);
