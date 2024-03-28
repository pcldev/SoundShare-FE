import request from "../utils/request";

export const BASE_URL = "http://localhost:5000/api";

export const login = async (data) => {
  const res = await request.post(`${BASE_URL}/user/login`, data);
  return res.data;
};

export const register = async (data) => {
  const res = await request.post(`${BASE_URL}/user/register`, data);

  return res.data;
};

export const me = async () => {
  const res = await request.get(`${BASE_URL}/user/me`);

  return res.data;
};
