import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    cart:[],
    quantity: 0,
    totalPrice: 0

}

export const shoppingCartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1;
            state.cart.push(action.payload);
           

        }

    }    
    
})

export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;