import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1/';

const baseApi = axios.create({
  baseURL,
});

export {
  baseURL,
  baseApi,
};
