import axios from "axios";
import { API_KEY, BASE_URL } from "@env";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
});

export default api;