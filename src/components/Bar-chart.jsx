"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Projections",
    color: "var(--chart-1)",
    theme: {
      light: "#A8C5DA",
      dark: "#A8C5DA",
    },
  },
  mobile: {
    label: "Actuals",
    color: "var(--chart-2)",
    theme: {
      light: "#cee1ee",
      dark: "#687681",
    },
  },
};

export function ChartBarStacked() {
  return (
    <Card className="w-108 h-63 ">
      <CardHeader className="">
        <CardTitle className="text-left  ">Projections vs Actuals</CardTitle>
        {/* <CardDescription className='text-left'>January - June 2025</CardDescription> */}
      </CardHeader>
      <CardContent className=" pl-0">
        <ChartContainer
          config={chartConfig}
          className="min-h-[165px]  h-42 w-full "
        >
          <BarChart accessibilityLayer data={chartData} width={10}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={true} />
            <ChartTooltip content={<ChartTooltipContent />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              // radius={[0, 0, 4, 4]}
              barSize={25}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
              barSize={25}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing Projections vs Actuals for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}
