import axios from "axios";

const mainApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export { mainApi };
