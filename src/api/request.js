import { BASE_URL } from '../constants/Index';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((req) => {
  req.headers['access-token'] = 'OpCVPXcZEBy4p1EeI5pzFw';
  req.headers.client = '-ejMXBjkgs9tS2Cmmg-AzA';
  req.headers.expiry = '1668499571';
  req.headers['token-type'] = 'Baerer';
  req.headers.uid = 'fazal@gmail.com';

  return req;
});

instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
