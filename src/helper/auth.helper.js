export const setHeaders = (headers) => {
  localStorage.setItem('token', headers['access-token']);
  localStorage.setItem('client', headers.client);
  localStorage.setItem('expiry', headers.expiry);
  localStorage.setItem('uid', headers.uid);
};

export const getHeaders = () => {
  return {
    client: localStorage.getItem('client'),
    expiry: localStorage.getItem('expiry'),
    token: localStorage.getItem('token'),
    uid: localStorage.getItem('uid'),
  };
};

export const deleteHeaders = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('client');
  localStorage.removeItem('expiry');
  localStorage.removeItem('uid');
};
