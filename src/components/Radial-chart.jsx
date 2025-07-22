"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [
    { month: "january", desktop: 500, mobile: 570,laptop:700,tab:700 },
]

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
} 

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    // <Card className="flex flex-col w-53  ">
    //   <CardHeader className=" mb-0">
    //     <CardTitle className="text-left">Total Sales</CardTitle>
    //   </CardHeader>
    //   <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className=" mx-auto aspect-square w-full max-w-[120px] mt-0"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={50}
            outerRadius={70}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {/* <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis> */}
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
    //   </CardContent>
    //   <CardFooter className="flex-col gap-2 text-sm">
    //     {/* <div className="flex items-center gap-2 leading-none font-medium">
    //       Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //     </div>
    //     <div className="text-muted-foreground leading-none">
    //       Showing total visitors for the last 6 months
    //     </div> */}
    //   </CardFooter>
    // </Card>
  )
}
