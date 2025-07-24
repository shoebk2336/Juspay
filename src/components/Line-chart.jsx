

"use client";

import { Dot, DotIcon } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 210 },
  { month: "February", desktop: 386, mobile: 110 },
  { month: "March", desktop: 250, mobile: 250 },
  { month: "April", desktop: 180, mobile: 300 },
  { month: "May", desktop: 280, mobile: 280 },
  { month: "June", desktop: 350, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    theme: {
      dark: "#A8C5DA",
      light: "#A8C5DA",
    },
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
    theme: {
      dark: "#C6C7F8",
      light: "#1C1C1C",
    },
  },
};

export function ChartLineMultiple({ className }) {
  return (
    <Card className={cn("  min-h-0   ", className)}>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <CardTitle className="text-left text-sm">Revenue</CardTitle>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Dot size={12} color="#A8C5DA" />
            <span className="text-xs">Current Week</span>
            <span className="font-bold text-sm">$58,211</span>
          </div>
          <Separator orientation="vertical" className="hidden sm:block" />
          <div className="flex items-center gap-1">
            <DotIcon size={12} color="#C6C7F8" />
            <span className="text-xs">Previous Week</span>
            <span className="font-bold text-sm">$68,786</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-0 min-h-[80%] ">
        <ChartContainer config={chartConfig} className="max-h-1/1  rounded-lg w-full max-w-full">
          {/* <ResponsiveContainer className=" max-h-1/1" width="100%" aspect={2}> */}
            <LineChart
            
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          {/* </ResponsiveContainer> */}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// 

// "use client"

// import { TrendingUp } from "lucide-react"
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"

// export const description = "A multiple line chart"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig

// export function ChartLineMultiple() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Line Chart - Multiple</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <LineChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//             <Line
//               dataKey="desktop"
//               type="monotone"
//               stroke="var(--color-desktop)"
//               strokeWidth={2}
//               dot={false}
//             />
//             <Line
//               dataKey="mobile"
//               type="monotone"
//               stroke="var(--color-mobile)"
//               strokeWidth={2}
//               dot={false}
//             />
//           </LineChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter>
//         <div className="flex w-full items-start gap-2 text-sm">
//           <div className="grid gap-2">
//             <div className="flex items-center gap-2 leading-none font-medium">
//               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//             </div>
//             <div className="text-muted-foreground flex items-center gap-2 leading-none">
//               Showing total visitors for the last 6 months
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }

