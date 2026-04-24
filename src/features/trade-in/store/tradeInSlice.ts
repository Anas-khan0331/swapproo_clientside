import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TradeInState } from "../types";
import type { Product } from "@/types";

const initialState: TradeInState = {
  selectedProduct: null,
  activeBids: [],
  isSubmitting: false,
};

const tradeInSlice = createSlice({
  name: "tradeIn",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    clearProduct(state) {
      state.selectedProduct = null;
      state.activeBids = [];
    },
    setSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload;
    },
  },
});

export const { selectProduct, clearProduct, setSubmitting } = tradeInSlice.actions;
export default tradeInSlice.reducer;
