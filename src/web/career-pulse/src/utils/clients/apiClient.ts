import axios from "axios";
import {API_URL, TOKEN_NAME} from "../env.ts";
import {triggerError} from "../../errorManager.ts";

const apiClient = axios.create({
    baseURL: API_URL
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        const errorMsg = error.response?.data?.error?.message || "unknown error";
        triggerError(errorMsg);
        return Promise.reject(error);
    }
);

export default apiClient;
