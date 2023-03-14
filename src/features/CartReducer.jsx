import { createSlice } from "@reduxjs/toolkit";

export const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
    toggle: false,
  },
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload);
    },
    switch: (state, action) => {},
    del: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload.id);
    },
  },
});
export const { add, del } = CartReducer.actions;
export default CartReducer.reducer;
