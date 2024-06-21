import axios from 'axios';

const BASE_URL = `https://ipwho.is`;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

client.interceptors.request.use(
  async config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export { client };
