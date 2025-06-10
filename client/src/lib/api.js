import axios from "axios";

const baseUrl = "http://localhost:5001/api";
const options = {
  withCredentials: true,
};

export const getAuthUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}/auth/me`, options);
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null;
  }
};

export const signup = async (signupData) => {
  const response = await axios.post(
    `${baseUrl}/auth/signup`,
    signupData,
    options
  );
  return response.data;
};

export const login = async (loginData) => {
  const response = await axios.post(
    `${baseUrl}/auth/login`,
    loginData,
    options
  );
  return response.data;
};

export const completeOnboarding = async (userData) => {
  const response = await axios.post(
    `${baseUrl}/auth/onboard`,
    userData,
    options
  );
  return response.data;
};
