import type { AxiosInstance } from "axios";
import axios from "axios";

export const api: AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholde.typicode.com",
    timeout: 10000,
})