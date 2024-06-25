// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],  // Array to hold products from JSON
  cart: []       // Array to hold cart items
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ id, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const cartItem = state.cart.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});

export const { setProducts, addToCart, removeFromCart, updateQuantity, clearCart } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
    
  }
});
