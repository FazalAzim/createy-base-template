import { BASE_URL } from '../constants/Index';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((req) => {
  req.headers['access-token'] = 'vBfrtSV9Fn9DSKr-M0v_xA';
  req.headers.client = '3QovzrLp7AVWpSHQ2euiRw';
  req.headers.expiry = '1669264522';
  req.headers['token-type'] = 'Baerer';
  req.headers.uid = 'fazal@gmail.com';

  return req;
});

instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
