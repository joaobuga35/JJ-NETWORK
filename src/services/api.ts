import axios from "axios";

const api = axios.create({
  baseURL: "https://project-full-stack-jj.onrender.com",
  timeout: 20000,
});

export default api;
