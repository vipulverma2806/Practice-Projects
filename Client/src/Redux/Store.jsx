import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import CartSlice from "../Shopping/CartSlice"
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartSlice,
  },
});

export default store;