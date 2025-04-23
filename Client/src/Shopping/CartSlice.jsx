import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: { value: [] },
  reducers: {
    Add: (state, action) => {
      state.value.push(action.payload);
    },
    Delete: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { Add,Delete } = CartSlice.actions;
export default CartSlice.reducer;
