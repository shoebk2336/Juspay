import { configureStore } from "@reduxjs/toolkit";
import OrderListReducer from "./Slicers/OrderList-Slicer";


export const store=configureStore({
    reducer:{
        Orders:OrderListReducer
    }
})