import {combineReducers}   from "@reduxjs/toolkit";
import  userReducer from "./userReducer";
import  wishlistReducer  from "./wishlistReducer";
import  cartReducer  from "./cartReducer"
import  currentProductReducer  from "./currentProductReducer"
import orderReducer from "./orderReducer";


const rootReducer = combineReducers({
    user:userReducer,
    wishlist:wishlistReducer,
    cart:cartReducer,
    currentProduct:currentProductReducer,
    order: orderReducer
    


})

export default rootReducer;