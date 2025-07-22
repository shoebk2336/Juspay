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

export function TableDemo({ data }) {
  return (
    <Table className="border-separate border-spacing-y-2 ">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className=" ">
          <TableHead className="text-[12px] text-left w-[100px]">
            Name
          </TableHead>
          <TableHead className="text-[12px] text-left">Price</TableHead>
          <TableHead className="text-[12px] text-left">Quantity</TableHead>
          <TableHead className="text-[12px] text-left">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className=" ">
        {data?.map((val, index) => (
          <TableRow key={index} className="border-0">
            <TableCell className="text-[12px] text-left w-[30%]">
              {val.name}
            </TableCell>
            <TableCell className="text-[12px] text-left">{val.price}</TableCell>
            <TableCell className="text-[12px] text-left">
              {val.quantity}
            </TableCell>
            <TableCell className="text-[12px] text-left">
              {val.amount}
            </TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
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
