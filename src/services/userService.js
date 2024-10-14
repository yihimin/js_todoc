export const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/users");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  };
  