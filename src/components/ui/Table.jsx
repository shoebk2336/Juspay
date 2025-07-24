

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { cn } from "@/lib/utils";

// export function TableDemo({ data, className }) {
//   return (
//     <div className="w-full overflow-x-auto">
//       <Table
//         className={cn(
//           "border-separate border-spacing-y-2 w-full text-sm",
//           className
//         )}
//       >
//         <TableHeader>
//           <TableRow>
//             <TableHead className="text-left text-[12px] w-[30%]">Name</TableHead>
//             <TableHead className="text-left text-[12px] w-[20%]">Price</TableHead>
//             <TableHead className="text-left text-[12px] w-[20%]">Quantity</TableHead>
//             <TableHead className="text-left text-[12px] w-[30%]">Amount</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {data?.length > 0 ? (
//             data.map((val, index) => (
//               <TableRow key={index} className="border-0">
//                 <TableCell className="text-[12px] text-left">{val.name}</TableCell>
//                 <TableCell className="text-[12px] text-left">{val.price}</TableCell>
//                 <TableCell className="text-[12px] text-left">{val.quantity}</TableCell>
//                 <TableCell className="text-[12px] text-left">{val.amount}</TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={4} className="text-center py-4 text-muted-foreground text-[13px]">
//                 No data available
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
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
    <div className="w-full ">
      <Table
        className={cn(
          "min-w-[600px] border-separate border-spacing-y-2 text-sm",
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
              <TableCell
                colSpan={4}
                className="text-center py-4 text-muted-foreground text-[13px]"
              >
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
