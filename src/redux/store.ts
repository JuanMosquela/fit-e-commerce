import { configureStore } from "@reduxjs/toolkit";
import  shoppingCartRedux, {reloadCart }  from "./shoppingCartRedux";

export const store = configureStore({
    reducer: {
        cart: shoppingCartRedux
    }
})

store.dispatch(reloadCart());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



