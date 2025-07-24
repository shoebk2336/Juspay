// 

// new

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
    <Card className={cn("min-w-0 w-full", className)}>
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

      <CardContent className="pl-0 min-h-[300px]">
        <ChartContainer config={chartConfig} className="rounded-lg w-full max-w-full">
          <ResponsiveContainer width="100%" aspect={2}>
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
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
