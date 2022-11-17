import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './product/productSlice';

export default configureStore({
  reducer: {
    addToCart: addToCartReducer,
  },
});
