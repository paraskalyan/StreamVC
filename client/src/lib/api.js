import axios from "axios";

const baseUrl = "http://localhost:5001/api";

export const getAuthUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}/auth/me`);
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null;
  }
};

export const login = async (loginData) => {
  const response = await axios.post(`${baseUrl}/auth/login`, loginData);
  return response.data;
};
