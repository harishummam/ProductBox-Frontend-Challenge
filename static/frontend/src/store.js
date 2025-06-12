import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { itemsAPI } from "./api/api";
import { loadState, saveState } from "./features/localStorage";

const preloadedCartState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [itemsAPI.reducerPath]: itemsAPI.reducer,
  },
  preloadedState: {
    cart: preloadedCartState || { items: [], total: 0 },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsAPI.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state.cart);
});
