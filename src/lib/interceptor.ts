import axiosInstance from "axios";
import { useRouter } from "next/router";

export const axios = axiosInstance.create({
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
