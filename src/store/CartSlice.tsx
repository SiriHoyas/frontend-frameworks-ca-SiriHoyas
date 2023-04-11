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
      const duplicate = state.cartItems.find((product) => product.id === action.payload.id);

      if (duplicate) {
        let quantity = action.payload.quantity;
        quantity += duplicate.quantity;

        state.cartItems = state.cartItems.map((item) => {
          if (item.id !== action.payload.id) return item;
          return {
            ...item,
            quantity,
          };
        });
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
      state.total = state.total + action.payload.price;
      state.itemCount = state.cartItems.reduce((count, item) => count + item.quantity, 0);
    },
    clearCart: (state: cartState) => {
      state.cartItems = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
