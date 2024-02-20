import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name:'search',
    initialState:{
        search:''
    },
    reducers:{
        searchproduct:(state,action)=>{
            state.search = action.payload
        }
    }
})

export const {searchproduct} =  searchSlice.actions
export default searchSlice.reducer