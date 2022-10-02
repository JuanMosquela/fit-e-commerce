import { configureStore } from "@reduxjs/toolkit";
import  shoppingCartRedux  from "./shoppingCartRedux";

export const store = configureStore({
    reducer: {
        cart: shoppingCartRedux
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



