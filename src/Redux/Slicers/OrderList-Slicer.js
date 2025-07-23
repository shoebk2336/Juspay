import { createSlice } from "@reduxjs/toolkit";
import OrderList from "../../../Mock-Data/OrderList-Data.json";

const initialState = {
  orders: OrderList,
  filterOrders: [],
  sortOrders: [],
  ordertobeDisplayed: [],
};

export const OrderListSlicer = createSlice({
  name: "OrderList",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filterOrders = state.orders.filter(
        (order) => action.payload[order.status] === true,
      );
    },
    sort: (state, action) => {
      if (action.payload === "az")
        state.sortOrders = state.orders.sort((a, b) =>
          a.user.localeCompare(b.user),
        );
      if (action.payload === "za")
        state.sortOrders = state.orders.sort((a, b) =>
          b.user.localeCompare(a.user),
        );
      // else state.sortOrders=[]
    },
  },
});

export const { filter, sort } = OrderListSlicer.actions;
export default OrderListSlicer.reducer;
