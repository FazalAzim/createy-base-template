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
