import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[]
    },
    reducers:{
        addProducts:(state,action)=>{
            state.product = action.payload
        }
    }
})

export const {addProducts} =  productSlice.actions
export default productSlice.reducer
