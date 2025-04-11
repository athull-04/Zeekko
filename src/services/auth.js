import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/adminlogin`, { username, password });
    return response.data.token;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (username, password, role) => {
  try {
    await axios.post(`${API_URL}/register`, { username, password, role });
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
