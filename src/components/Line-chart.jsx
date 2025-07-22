"use client";

import { Dot, DotIcon, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "./ui/separator";

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

export function ChartLineMultiple() {
  return (
    <Card className="w-166 h-80">
      <CardHeader className="flex  items-center">
        <CardTitle className="text-left">Revenue</CardTitle>
        <div className="flex h-5 items-center space-x-6 text-sm ml-4">
          <Separator orientation="vertical" />
          <div className=" gap-2 flex items-center">
            <Dot size={30} color="#A8C5DA" />
            Current Week <span className="font-bold">$58,211</span>
          </div>
          {/* <Separator orientation="vertical" /> */}
          <div className="flex gap-2 items-center">
            <DotIcon size={30} color="#C6C7F8" />
            Previous Week <span className="font-bold">$68,786</span>
          </div>
        </div>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="pl-0">
        <ChartContainer config={chartConfig} className=" h-58 w-full">
          <LineChart
            accessibilityLayer
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
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
