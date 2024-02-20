import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
    cart : cartSlice,
    search : searchSlice
  },
});

export default store;
