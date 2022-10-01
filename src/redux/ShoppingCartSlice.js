import { createSlice } from "@reduxjs/toolkit";


export const shoppingCartSlice = createSlice({
    
    initialState: {
        cart:[],
        quantity: 0,
        totalPrice: 0
    }
} )