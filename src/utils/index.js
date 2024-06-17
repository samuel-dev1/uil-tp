import axios from 'axios';
import { BASE_URL } from '../config/index';

const options = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json,text/plain,*/*',
    'Content-Type': 'application/json',
  },
};

export const request = axios.create(options);

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default request;
