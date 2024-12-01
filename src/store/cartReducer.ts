import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../types/Product";

interface CartState {
  items: (Product & { quantity: number })[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.items.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
