import axios from 'axios';

const api = axios.create({
  baseURL: 'http://my-json-server.typicode.com/alopsantos/imobiliariam3/',
});

export default api;
