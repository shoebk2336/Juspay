"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

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

export const description = "A radial chart with stacked sections";

const chartData = [
  { month: "january", desktop: 500, mobile: 570, laptop: 700, tab: 700 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  laptop: {
    label: "Laptop",
    color: "var(--chart-2)",
  },
  tab: {
    label: "Tab",
    color: "var(--chart-2)",
  },
};

export function ChartRadialStacked() {
  const totalVisitors =
    chartData[0].desktop +
    chartData[0].mobile +
    chartData[0].laptop +
    chartData[0].tab;

  return (
    <ChartContainer
      config={chartConfig}
      className=" mx-auto aspect-square w-full max-w-[120px] mt-0"
    >
      <RadialBarChart
        cx="50%"
        cy="50%"
        data={chartData}
        endAngle={360}
        innerRadius={50}
        outerRadius={70}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            position="center"
            content={() => (
              <text x="50%" y="50%" textAnchor="middle">
                <tspan
                  x="50%"
                  y="50%"
                  className="fill-foreground text-2xl font-bold"
                >
                  {totalVisitors.toLocaleString()}
                </tspan>
                <tspan x="50%" y="65%" className="fill-muted-foreground">
                  Sales
                </tspan>
              </text>
            )}
          />
        </PolarRadiusAxis>

        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="#95A4FC"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="mobile"
          fill="#B1E3FF"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="laptop"
          stackId="a"
          cornerRadius={5}
          fill="#BAEDBD"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="tab"
          stackId="a"
          cornerRadius={5}
          fill="#C6C7F8"
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
