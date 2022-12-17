import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartreducer from "../slice/cartSlice";

export default configureStore({
    reducer:{
        productReducer,
        cartreducer,
    }
})