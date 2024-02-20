import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        state.cart = [...state.cart, temp];
      }
    },
    RemoveCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    Decrement:(state,action) => {
      const itemindex_dec = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if(state.cart[itemindex_dec].qty >= 1){
        state.cart[itemindex_dec].qty -= 1;
    }
    }
    ,
    emptycart:(state,action)=>{
      state.cart = []

    }
  },
});

export const { AddToCart, RemoveCart ,Decrement ,emptycart} = cartSlice.actions;
export default cartSlice.reducer;
