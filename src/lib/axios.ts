import axios from "axios";

const baseURL = process.env.API_URL

export const apiInstance = axios.create({
    baseURL,
    // headers: {
    //   "Content-Type": "application/json",
    //   'accept': 'text/plain',
    //   "Access-Control-Allow-Origin": "*",
    //   // withCredentials: true,
    // },
  });

  // apiInstance.interceptors.request.use(
  //   async (config) => {
  //     if (process.env.API_KEY) {
  //       config.headers.Authorization = `Bearer ${process.env.API_KEY}`;
  //     }
  //     return config;
  //   }
  // )