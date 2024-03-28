import request from "../utils/request";
import { BASE_URL } from "./userServices";

export const createMusic = async (data) => {
  const res = await request.post(`${BASE_URL}/audio/`, data);
  return res.data;
};

export const removeMusic = async (param) => {
  const res = await request.delete("audio/" + param);
  return res.data;
};

export const getListMusic = async (data) => {
  const res = await request.post(`${BASE_URL}/audio/find-all`, data);
  return res.data;
};

export const getMyMusic = async (data) => {
  const res = await request.post(`${BASE_URL}/audio/find-all`, data);
  return res.data;
};

export const getMusic = async (param) => {
  const res = await request.get(`${BASE_URL}/audio/` + param);
  return res.data;
};

export const updateMusic = async (data) => {
  const res = await request.put("audio", data);
  return res.data;
};
