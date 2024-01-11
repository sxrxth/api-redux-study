// store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/cartSlice";
import wishlistReducer from "../redux/slices/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlistReducer: wishlistReducer,
    cartReducer: cartReducer,
  },
});

export default store;
