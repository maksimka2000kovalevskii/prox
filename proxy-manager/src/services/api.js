import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Замените на URL вашего бэкенд-сервера
});

export const getProxies = () => api.get("/proxies");
export const saveProxies = (proxies) => api.post("/proxies", proxies);
export const getLogs = () => api.get("/logs");
