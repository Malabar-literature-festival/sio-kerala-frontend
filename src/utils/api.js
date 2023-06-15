import axios from "axios";
import { GetAccessToken } from "../backend/authentication";
// require('dotenv').config();
// import dotenv from 'dotenv';

const token = GetAccessToken();

const api = axios.create({
  // baseURL: 'http://localhost:8080/api/v1',
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": false ? "multipart/form-data" : "application/json",
    Authorization: "Bearer " + token,
  },
});

api.interceptors.response.use(
  (res) => res
  // (err) => {
  //   if (err.response.status === 401) {
  //     store.dispatch({ type: ADMIN_LOGOUT });cd pro
  //   }
  //   return Promise.reject(err);
  // }
);

export default api;
