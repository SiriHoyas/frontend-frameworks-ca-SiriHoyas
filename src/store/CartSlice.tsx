import { createSlice } from "@reduxjs/toolkit";
import { cartState } from "../components/Types";

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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
