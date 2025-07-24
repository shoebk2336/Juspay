import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { TableDemo } from './ui/Table'
import { DotIcon } from 'lucide-react'
import TableData from "../../Mock-Data/Table-Data.json";
import { ChartRadialStacked } from './Radial-chart';


const LandingTablewithRadial = () => {
    const TotalSales = [
        { title: "Direct", value: 300.56, color: "#95A4FC" },
        { title: "Affiliate", value: 135.18, color: "#B1E3FF" },
        { title: "Sponsored", value: 154.02, color: "#BAEDBD" },
        { title: "Email", value: 48.96, color: "#C6C7F8" },
      ];

  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">
    <Card className="w-full sm:flex-1 ">
      <CardHeader>
        <CardTitle className="text-left">Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="">
        <TableDemo data={TableData} />
      </CardContent>
    </Card>

    {/* Radial Chart */}
    <Card className="w-full sm:max-w-[30%] ">
      <CardHeader>
        <CardTitle className="text-left">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartRadialStacked className="w-full max-w-[120px] m-auto" />
      </CardContent>
      <CardFooter className="flex flex-col justify-center  ">
        {TotalSales?.map((sale, index) => (
          <div
            key={index}
            className=" flex items-center justify-between w-full"
          >
            <h1 className="flex items-center text-[12px]">
              <DotIcon color={sale.color} size={30} />
              {sale.title}
            </h1>
            <h1 className="text-[12px]">${sale.value}</h1>
          </div>
        ))}
      </CardFooter>
    </Card>
  </div>
  )
}

export default LandingTablewithRadial
