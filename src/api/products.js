import instance from './request';

export function getProducts() {
  return instance({
    method: 'GET',
    url: '/api/v1/products/',
  });
}
export function getSearch(key) {
  return instance({
    method: 'GET',
    url: `/api/v1/products/?search_keyword=${key}`,
  });
}

export function showCategories() {
  return instance({
    method: 'GET',
    url: '/api/v1/categories',
  });
}
export function getFilter(key) {
  return instance({
    method: 'GET',
    url: `/api/v1/products/?category_id=${key}`,
  });
}
export function registration(userData) {
  return instance({
    method: 'POST',
    url: '/api/v1/auth',
    data: userData,
  });
}
export function authorization(userData) {
  return instance({
    method: 'POST',
    url: '/api/v1/auth/sign_in',
    data: userData,
  });
}
export function getCart() {
  return instance({
    method: 'GET',
    url: '/api/v1/cart',
  });
}
