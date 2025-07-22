import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import CustomAvatar from "./Custom-Avatar";
import { Checkbox } from "./ui/checkbox";

export function OrderListTable({ data }) {
  const statusColors = {
    "In Progress": "text-blue-500",
    Complete: "text-green-500",
    Pending: "text-yellow-500",
    Approved: "text-emerald-500",
    Rejected: "text-gray-500",
  };
  return (
    <Table className=" ">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="">
        <TableRow className=" ">
          <TableHead className="text-[12px] text-left text-gray-500 ">
            <Checkbox />
          </TableHead>
          <TableHead className="text-[12px] text-left text-gray-500 ">
            Order ID
          </TableHead>
          <TableHead className="text-[12px] text-left text-gray-500">
            User
          </TableHead>
          <TableHead className="text-[12px] text-left text-gray-500">
            Project
          </TableHead>
          <TableHead className="text-[12px] text-left text-gray-500">
            Address
          </TableHead>
          <TableHead className="text-[12px] text-left text-gray-500">
            Date
          </TableHead>
          <TableHead className="text-[12px] text-left text-gray-500">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className=" ">
        {data?.map((val, index) => (
          <TableRow key={index} className="space-y-2">
            <TableCell className="text-[12px] py-4 text-left ">
              <Checkbox />
            </TableCell>
            <TableCell className="text-[12px] py-4 text-left ">
              {val.order_id}
            </TableCell>
            <TableCell className="text-[12px] py-4 text-left flex gap-2 items-center">
              <CustomAvatar data={val.avatar} />
              {val.user}
            </TableCell>
            <TableCell className="text-[12px] py-4 text-left">
              {val.project}
            </TableCell>
            <TableCell className="text-[12px] py-4 text-left">
              {val.address}
            </TableCell>
            <TableCell className="text-[12px] py-4 text-left">{val.date}</TableCell>
            <TableCell
              className={`${statusColors[val.status]} text-[12px] py-4 text-left`}
            >
              {val.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
    </Table>
  );
}
