import axios from 'axios';

const { REACT_APP_API, REACT_APP_API_KEY } = process.env;

const client = axios.create({
  baseURL: REACT_APP_API,
});

client.interceptors.response.use(
  (response) => response.data,
  (response) => {
    let error = response.response.data.error.message;

    if (response.response.data.message) {
      error = response.response.data.message;
    }

    return Promise.reject(error);
  }
);

client.interceptors.request.use(
  (config) => {
    if (REACT_APP_API_KEY) {
      config.headers = { apikey: REACT_APP_API_KEY };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default client;
