// src/utils/request.js
import axiosInstance from './axios';

// 封装 GET 请求
export const get = (url, params) => {
  return axiosInstance.get(url, { params });
};

// 封装 POST 请求
export const post = (url, data) => {
  return axiosInstance.post(url, data);
};

// 封装 PUT 请求
export const put = (url, data) => {
  return axiosInstance.put(url, data);
};

// 封装 DELETE 请求
export const del = (url, data) => {
  return axiosInstance.delete(url, { data });
};
