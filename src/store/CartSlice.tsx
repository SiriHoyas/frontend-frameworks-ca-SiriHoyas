import { createSlice, current } from "@reduxjs/toolkit";

import { cartState } from "../components/types";

const initialState: cartState = {
  cartItems: [],
  itemCount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: cartState, action) => {
      const duplicate = state.cartItems.find((product) => {
        console.log(current(state));
      });

      if (duplicate) {
        console.log("more than one item");
      }

      action.payload.quantity = 4;
      state.cartItems = [...state.cartItems, action.payload];
      state.total = state.total + action.payload.price;
      state.itemCount = state.cartItems.length;
    },
    clearCart: (state: cartState) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
