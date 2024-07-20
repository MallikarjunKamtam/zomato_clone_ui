import axiosInstance from "axios";

export const axios = axiosInstance.create({
  withCredentials: true,
});
