import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const user = JSON.stringify(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)
const TOKEN = JSON.parse(user)?.accessToken;
console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
