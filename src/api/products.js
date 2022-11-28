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
export function signUp(user) {
  return instance({
    method: 'POST',
    url: '/api/v1/auth',
    data: user,
  });
}
export function signIn(user) {
  return instance({
    method: 'POST',
    url: '/api/v1/auth/sign_in',
    data: user,
  });
}
export const fetchCart = () => {
  return instance({
    method: 'GET',
    url: '/api/v1/cart',
  });
};

export const setItemsInCart = (data) => {
  return instance({
    method: 'PATCH',
    url: '/api/v1/cart',
    data: {
      product_id: data.id,
      quantity: data.quantity,
    },
  });
};
export const removeItemFromCart = (data) => {
  return instance({
    method: 'DELETE',
    url: `/api/v1/cart?line_item_id=${data}`,
  });
  // return request.delete(`/cart?line_item_id=${id}`);
};
