"use client";

import * as React from "react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilterIcon } from "lucide-react";
import { filter } from "@/Redux/Slicers/OrderList-Slicer";
import { useDispatch, useSelector } from "react-redux";

export function OrderFilterDropdown() {
  const dispatch = useDispatch();

  const CheckBoxStatusObj = {
    "In Progress": false,
    Complete: false,
    Pending: false,
    Approved: false,
    Rejected: false,
  };
  const [CheckBoxStatus, setCheckBoxStatus] = React.useState(CheckBoxStatusObj);

  React.useEffect(() => {
    dispatch(filter(CheckBoxStatus));
  }, [CheckBoxStatus]);

  const data = ["In Progress", "Complete", "Pending", "Approved", "Rejected"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" border-0 shadow-none bg-transparent  dark:bg-transparent hover:cursor-pointer"
        >
          <ListFilterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        {data?.map((status, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={CheckBoxStatus[status]}
            onCheckedChange={() =>
              setCheckBoxStatus((prev) => ({
                ...prev,
                [status]: !prev[status],
              }))
            }
          >
            {status}
          </DropdownMenuCheckboxItem>
        ))}
        <div onClick={() => setCheckBoxStatus(CheckBoxStatusObj)}>
          <Button variant="outline" className="w-full my-2">
            Clear
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
