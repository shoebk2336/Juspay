import {createSlice} from '@reduxjs/toolkit'
import OrderList from '../../../Mock-Data/OrderList-Data.json'


const initialState={
    orders:OrderList,
    filterOrders:[],
    sortOrders:[]
}

export const OrderListSlicer=createSlice({
    name:"OrderList",
    initialState,
    reducers:{
        filter:(state,action)=>{
            state.filterOrders = state.orders.filter(
                (order) => action.payload[order.status] === true
              );
        }

    }
})

export const {filter}=OrderListSlicer.actions
export default OrderListSlicer.reducer