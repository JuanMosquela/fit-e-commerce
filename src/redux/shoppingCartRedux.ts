import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { Product } from "../utils/interfaces";
import { RootState } from "./store";

interface CartState {
    cart: Product[],
    quantity: number,
    totalPrice: number
}


 const initialState: CartState = {
    cart:[],
    quantity: 0,
    totalPrice: 0

}


export const shoppingCartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Product>) => {            
            state.quantity += 1;           

            const isInCart = state.cart.find(product => {
                return product.id === action.payload.id
            })           

            if(isInCart) {               
                const findItem = state.cart.map(item => {
                    return item.id === isInCart.id ? {...isInCart, amount: item.amount += 1 } : item
                }) 
                state.cart =  findItem         
            }else{
                state.cart.push({ ...action.payload, amount: 1 })
            }            
            state.totalPrice += action.payload.price           

        }

    }    
    
})

export const { addToCart } = shoppingCartSlice.actions;
export const useCartSelector = (state: RootState) => state.cart

export default shoppingCartSlice.reducer;