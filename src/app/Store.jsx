import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartReducer from "../features/CartReducer";
import { Cartslice } from "../features/Cartslice";

let store = configureStore({
  reducer: {
    cart: CartReducer,
    [Cartslice.reducerPath]: Cartslice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Cartslice.middleware),
});
setupListeners(store.dispatch);
export default store;
