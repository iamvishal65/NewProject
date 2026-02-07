import axios from "axios";
axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", 
  withCredentials: true,           
});

export default axiosInstance;