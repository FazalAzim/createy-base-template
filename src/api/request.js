import { BASE_URL } from '../constants/Index';
import axios from 'axios';
import { getHeaders } from '../helper/auth.helper';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (req) => {
  const headers = await getHeaders();
  req.headers['access-token'] = headers.token;
  req.headers['client'] = headers.client;
  req.headers['expiry'] = headers.expiry;
  req.headers['token-type'] = 'Bearer';
  req.headers['uid'] = headers.uid;

  return req;
});

instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
