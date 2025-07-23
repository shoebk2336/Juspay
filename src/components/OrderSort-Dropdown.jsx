"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownZA,
  ArrowUpAZ,
  ArrowUpDownIcon,
  ListFilterIcon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "@/Redux/Slicers/OrderList-Slicer";

export function OrderSortDropdown() {
  const dispatch = useDispatch();
  const SortedOrders = useSelector((state) => state.Orders.sortOrders);
  console.log(SortedOrders, "sortorders");
  const [position, setPosition] = React.useState("");
  console.log(position, "dropdown");

  React.useEffect(() => {
    dispatch(sort(position));
  }, [position]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" border-0 shadow-none bg-transparent  dark:bg-transparent hover:cursor-pointer"
        >
          <ArrowUpDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="az">
            <ArrowUpAZ />
            User Name
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="za">
            <ArrowDownZA />
            User Name
          </DropdownMenuRadioItem>
          {/* <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem> */}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
