import { createSlice } from "@reduxjs/toolkit";

export type cartState = {
  cartItems: string[];
  itemCount: number;
  total: number;
  isLoading: boolean;
};

const initialState: cartState = {
  cartItems: [],
  itemCount: 22,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

console.log(cartSlice.getInitialState());

export default cartSlice.reducer;
