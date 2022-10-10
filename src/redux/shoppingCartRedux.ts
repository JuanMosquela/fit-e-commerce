import { createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        addToCart: (state: CartState, action: PayloadAction<any>) => {
            
            let counter = action.payload.counter
            
            state.quantity += counter ? counter : 1
            const existingIndex = state.cart.findIndex(
                (item) => item.id === action.payload.product.id
            );            
        
            if (existingIndex >= 0) {
                state.cart[existingIndex] = {
                  ...state.cart[existingIndex],
                  amount: counter ? state.cart[existingIndex].amount + counter : state.cart[existingIndex].amount + 1
                };
                
            } else {
                let tempProductItem = { ...action.payload.product, amount: counter ? counter : 1 };
                state.cart.push(tempProductItem);
                
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            

           
                    

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
        },
        reloadCart(state) {
            let { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.quantity += amount

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.quantity = quantity;
            state.totalPrice = total
        }, 
        clearCart: (state : CartState) => {
            state.cart = [];
            state.quantity = 0;
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }}
)

export const { addToCart, removeItem, decrese, increse, reloadCart, clearCart } = shoppingCartSlice.actions;

export const useCartSelector = (state: RootState) => state.cart

export default shoppingCartSlice.reducer;