import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND, // Make sure to set this in your .env file
});

http.interceptors.request.use(
  (config) => {
    const token = cookies.get('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;