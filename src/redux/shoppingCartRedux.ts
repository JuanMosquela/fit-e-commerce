import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../utils/interfaces";
import { RootState } from "./store";
import { toast } from 'react-toastify'

interface CartState {
    cart: Product[],
    quantity: number,
    totalPrice: number,
    favProducts: Product[]
}

const initialState: CartState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || "") : [],
    quantity: localStorage.getItem('cartQuantity') ? JSON.parse(localStorage.getItem('cartQuantity') || "") : 0,
    totalPrice: 0,
    favProducts: localStorage.getItem('favProducts') ? JSON.parse(localStorage.getItem('favProducts') || "") : []
}


export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToFav: (state: CartState, action: PayloadAction<Product>) => {
            state.favProducts = [...state.favProducts, action.payload] 
            localStorage.setItem('favProducts', JSON.stringify(state.favProducts)) 
            
            toast.success(`added ${action.payload.title} to favorites`, {
                position:'bottom-right' ,
                                   
            })      

        },
        removeFromFav: (state: CartState, action: PayloadAction<Product>) => {

            const removedProduct = state.favProducts.filter(product => {
                return product.id !== action.payload.id

            }) 
            if(removedProduct){
                state.favProducts = removedProduct
                localStorage.setItem('favProducts', JSON.stringify(state.favProducts)) 
            }          

        },

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
                toast.info('incresed product quantity', {
                    position:'bottom-right',
                                        
                })

            } else {
                let tempProductItem = { ...action.payload.product, amount: counter ? counter : 1 };
                state.cart.push(tempProductItem);
                toast.success(`added ${action.payload.product.title} to cart`, {
                    position:'bottom-right' ,
                                       
                })

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

            if (state.cart[itemIndex].amount > 1) {
                state.cart[itemIndex].amount -= 1
            } else {
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
        clearCart: (state: CartState) => {
            state.cart = [];
            state.quantity = 0;
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }
}
)

export const { addToFav,removeFromFav, addToCart, removeItem, decrese, increse, reloadCart, clearCart } = shoppingCartSlice.actions;

export const useCartSelector = (state: RootState) => state.cart

export default shoppingCartSlice.reducer;