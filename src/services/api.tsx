import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.220.12.193:2222/',
});

export default api;