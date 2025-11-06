import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // backend server URL
  withCredentials: true,            // optional: if cookies are used
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;