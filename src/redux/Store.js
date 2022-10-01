import { configureStore } from "@reduxjs/toolkit";
import  shoppingCartRedux  from "./shoppingCartRedux";


export default configureStore({
    reducer: {
        cart: shoppingCartRedux
    }

})



