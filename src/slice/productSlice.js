import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('products/fetchProduct', async()=>{
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    return await response.json();
 
})

export const proudctSlice= createSlice({
    name: 'proudctSlice',
    initialState: {
        products:[],
        status: "idle",
        error: null
    },
    extraReducers: function (builder) {
        builder.addCase(fetchProduct.fulfilled, (state, action) =>  {
            state.products = action.payload
            state.status = "sucess"
        })
        
    }

})


export default proudctSlice.reducer