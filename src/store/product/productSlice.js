import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const productSlice = createSlice({
  name: 'addToCart',
  initialState: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    totalCost: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let productExist = state.cart.find((element) => element.id === action.payload.id);
      if (productExist) {
        if (productExist.quantity < action.payload.inventory) {
          productExist.quantity += 1;
          toast.info(`increase ${action.payload.name} cart quantity`, {
            position: 'top-right',
          });
        } else {
          toast.success('You are out of stock', {
            position: 'top-right',
          });
        }
      } else if (action.payload.inventory === 0) {
        toast.success('Out of Stock', {
          position: 'top-right',
        });
      } else {
        state.itemsCost = state.itemsCost + action.payload.price;
        state.totalCost = state.shippingCost + state.itemsCost;
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart`, {
          position: 'top-right',
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cart.filter((cart) => cart.id !== action.payload.id);
      state.cart = nextCartItem;
      localStorage.setItem('cart', JSON.stringify(state.cart));
      toast.success(`${action.payload.name} remove from cart`, {
        position: 'top-right',
      });
    },
    decrement(state, action) {
      const productExist = state.cart.findIndex((cart) => cart.id === action.payload.id);
      if (state.cart[productExist].quantity > 1) {
        state.cart[productExist].quantity -= 1;
        toast.info(`Decrease ${action.payload.name} cart quantity`, {
          position: 'top-right',
        });
      } else if (state.cart[productExist].quantity === 1) {
        const nextCartItem = state.cart.filter((cart) => cart.id !== action.payload.id);
        state.cart = nextCartItem;
        toast.success(`${action.payload.name} remove from cart`, {
          position: 'top-right',
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      toast.success('Your cart is empty', {
        position: 'top-right',
      });
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getTotal(state) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, quantity } = cart;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalQuantity = quantity;
      state.totalCost = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, decrement, removeFromCart, getTotal } = productSlice.actions;

export default productSlice.reducer;
