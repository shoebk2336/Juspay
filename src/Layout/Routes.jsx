import LandingPage from "@/Pages/LandingPage";
import Second from "@/Pages/OrderList";
import { createBrowserRouter } from "react-router";
import Applayout from "./Applayout";
import OrderList from "@/Pages/OrderList";

export const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/order",
        element: <OrderList />,
      },
    ],
  },
]);
