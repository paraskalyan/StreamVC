import axios from "axios";

const baseUrl =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

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

export const logout = async () => {
  const response = await axios.post(`${baseUrl}/auth/logout`);
  return response.data;
};

export async function getUserFriends() {
  const response = await axios.get(`${baseUrl}/users/friends`, options);
  return response.data;
}

export async function getRecommendedUsers() {
  const response = await axios.get(`${baseUrl}/users`, options);
  return response.data;
}

export async function getOutgoingFriendReqs() {
  const response = await axios.get(
    `${baseUrl}/users/outgoing-friend-requests`,
    options
  );
  return response.data;
}

export async function sendFriendRequest(userId) {
  const response = await axios.post(
    `${baseUrl}/users/friend-request/${userId}`,
    {},
    { withCredentials: true }
  );
  return response.data;
}

export async function getFriendRequests() {
  const response = await axios.get(`${baseUrl}/users/friend-requests`, options);
  return response.data;
}

export async function acceptFriendRequest(requestId) {
  const response = await axios.put(
    `${baseUrl}/users/friend-request/${requestId}/accept`,
    {},
    options
  );
  return response.data;
}

export async function getStreamToken() {
  const response = await axios.get(`${baseUrl}/chat/token`, {
    withCredentials: true,
  });
  return response.data;
}
