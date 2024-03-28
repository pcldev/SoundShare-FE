import request from "../utils/request";
import { BASE_URL } from "./userServices";

export const createFile = async (data) => {
  const res = await request.post(`${BASE_URL}/file`, data);
  return res.data;
};
