// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Separator } from "@/components/ui/separator";
// import { cn } from "@/lib/utils";

// export function TableDemo({ data,className }) {
//   return (
//     <Table className={cn(`border-separate border-spacing-y-2 min-h-full `,className)}>
//       {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
//       <TableHeader>
//         <TableRow className=" ">
//           <TableHead className="text-[12px] text-left w-[100px]">
//             Name
//           </TableHead>
//           <TableHead className="text-[12px] text-left">Price</TableHead>
//           <TableHead className="text-[12px] text-left">Quantity</TableHead>
//           <TableHead className="text-[12px] text-left">Amount</TableHead>
//         </TableRow>
//       </TableHeader>

//       <TableBody className="min-h-full ">
//         {data?.map((val, index) => (
//           <TableRow key={index} className="border-0">
//             <TableCell className="text-[12px] text-left w-[30%]">
//               {val.name}
//             </TableCell>
//             <TableCell className="text-[12px] text-left">{val.price}</TableCell>
//             <TableCell className="text-[12px] text-left">
//               {val.quantity}
//             </TableCell>
//             <TableCell className="text-[12px] text-left">
//               {val.amount}
//             </TableCell>
//             {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }

// new

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function TableDemo({ data, className }) {
  return (
    <div className="w-full overflow-x-auto">
      <Table
        className={cn(
          "border-separate border-spacing-y-2 w-full text-sm",
          className
        )}
      >
        <TableHeader>
          <TableRow>
            <TableHead className="text-left text-[12px] w-[30%]">Name</TableHead>
            <TableHead className="text-left text-[12px] w-[20%]">Price</TableHead>
            <TableHead className="text-left text-[12px] w-[20%]">Quantity</TableHead>
            <TableHead className="text-left text-[12px] w-[30%]">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.length > 0 ? (
            data.map((val, index) => (
              <TableRow key={index} className="border-0">
                <TableCell className="text-[12px] text-left">{val.name}</TableCell>
                <TableCell className="text-[12px] text-left">{val.price}</TableCell>
                <TableCell className="text-[12px] text-left">{val.quantity}</TableCell>
                <TableCell className="text-[12px] text-left">{val.amount}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-muted-foreground text-[13px]">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
