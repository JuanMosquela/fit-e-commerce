import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

import { TypedUseSelectorHook } from "react-redux";
import { Product } from "../utils/interfaces";
import { RootState } from "./store";

interface CartState {
    cart: Product[],
    quantity: number,
    totalPrice: number
}

const initialState: CartState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || "") : [],
    quantity: localStorage.getItem('cartQuantity') ? JSON.parse(localStorage.getItem('cartQuantity') || "") : 0,
    totalPrice: 0
}


export const shoppingCartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Product>) => {            
            state.quantity += 1; 
            localStorage.setItem('cartQuantity', JSON.stringify(state.quantity))          

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

            localStorage.setItem('cart', JSON.stringify(state.cart)) 
                    

        },
        removeItem: (state: CartState, action: PayloadAction<Product>) => { 

            const itemIndex = state.cart.findIndex(item => {
                return item.id === action.payload.id
            })

            state.quantity -= state.cart[itemIndex].amount;
            localStorage.setItem('cartQuantity', JSON.stringify(state.quantity)) 

            const newArray = state.cart.filter(product => {
                return product.id !== action.payload.id
            })
            state.cart = newArray                        

            localStorage.setItem('cart', JSON.stringify(state.cart)) 
                      
        },
        decrese: (state: CartState, action: PayloadAction<Product>) => {

            state.quantity -= 1;
            localStorage.setItem('cartQuantity', JSON.stringify(state.quantity)) 

            const itemIndex = state.cart.findIndex(item => {
                return item.id === action.payload.id
            })
            
            if(state.cart[itemIndex].amount > 1){
                state.cart[itemIndex].amount -= 1                
            }else{
                const newArray = state.cart.filter(product => {
                    return product.id !== action.payload.id
                })
                state.cart = newArray  
                  
                localStorage.setItem('cart', JSON.stringify(state.cart)) 

            }
        }, 
        increse: (state: CartState, action: PayloadAction<Product>) => {
            const itemIndex = state.cart.findIndex(item => {
                return item.id === action.payload.id
            })

            state.cart[itemIndex].amount += 1
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }}
)

export const { addToCart, removeItem, decrese, increse } = shoppingCartSlice.actions;

export const useCartSelector = (state: RootState) => state.cart

export default shoppingCartSlice.reducer;