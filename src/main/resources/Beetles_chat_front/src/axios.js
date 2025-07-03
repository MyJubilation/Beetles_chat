// src/utils/axios.js
import axios from 'axios';
import router from './router';

// 创建 Axios 实例
const instance = axios.create({
  baseURL: '/api', // 设置基础 URL，所有请求都会附加该前缀
  timeout: 60000, // 请求超时时间（毫秒）
  withCredentials: true, // 允许携带 Cookie
  headers: {
    'Content-Type': 'application/json',
    'token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0YmVkZjg4OTRlZjM0ODRjOGNiNWM3OTllNzRkMWMxZiIsInN1YiI6IjMiLCJpc3MiOiJzZyIsImlhdCI6MTc1MDc1MDM4NSwiZXhwIjoxNzUwNzUzOTg1fQ.bW55gTRvMR22HVT6y2zdEcJ-zpJr7re-EksenfXkUpo',
	},
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在发送请求之前对配置进行处理，例如动态添加 token
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token');
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理
    return response.data;
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      const status = error.response.status;
      if (status === 403) {
        console.error('未授权，请重新登录');
		console.log(error.response);
        // 可以跳转到登录页面
		router.push("/login");
      } 
	  // else if (status === 403) {
   //      console.error('拒绝访问');
   //    }
    }
    return Promise.reject(error);
  }
);

export default instance;

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
