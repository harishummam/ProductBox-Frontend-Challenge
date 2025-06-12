import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../features/cartSlice";
import { itemsAPI } from "./api/api";

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    [itemsAPI.reducerPath]: itemsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsAPI.middleware),
});
