import { cartState } from "../components/types";
import { createSlice } from "@reduxjs/toolkit";

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
