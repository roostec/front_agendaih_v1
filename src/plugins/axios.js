import axios from "axios";

export default {
  install: (app) => {
    app.config.globalProperties.$http = axios.create({
      baseURL: process.env.VUE_API_URL || "http://localhost:3000/api/v1/",
    });
    app.config.globalProperties.$http.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
    app.config.globalProperties.$http.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  },
};
