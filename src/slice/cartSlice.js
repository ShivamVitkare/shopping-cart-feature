import { createSlice } from "@reduxjs/toolkit";


export const cartslice= createSlice({
    name:'cartslice',
    initialState:{
        value: []
    },
    reducers:{
        addtocart:(state, action) =>{
            const cartitem = state.value.find((item) => item.id == action.payload)
            if(cartitem){
                cartitem.quantity += 1;
                return;
            }
            state.value.push({
                quantity: 1,
                id: action.payload
            })
        },
        removeformcart:(state, action) =>{
            const cartitem = state.value.find((item)=> item.id == action.payload)
            if(cartitem){
                cartitem.quantity -= 1;
                if(cartitem.quantity ==0){
                    state.value = state.value.filter(item => item.id !== action.payload)
                }
            }
          
        },
        removeitem:(state, action) =>{
            state.value = state.value.filter(item => item.id !== action.payload)


        }

    }
})
export const {addtocart,removeformcart, removeitem } = cartslice.actions;
export default cartslice.reducer