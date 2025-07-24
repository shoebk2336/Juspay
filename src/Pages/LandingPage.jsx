// import { DropdownMenuRadioGroupDemo } from "@/components/drawer";
// import { ModeToggle } from "@/components/mode-toggle";
// import StatCard from "@/components/Stat-Card";
// import { Button } from "@/components/ui/button";
// import React from "react";
// import stats from "../../Mock-Data/Stat-CardData.json";
// import TableData from "../../Mock-Data/Table-Data.json";
// import revenuestats from "../../Mock-Data/Revenue-stat.json";
// import { ChartBarStacked } from "@/components/Bar-chart";
// import { ChartLineMultiple } from "@/components/Line-chart";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Strip } from "@/components/ui/strip";
// import { cn } from "@/lib/utils";
// import { CustomStrip } from "@/components/custom-Strip";
// import { TableDemo } from "@/components/ui/Table";
// import { ChartRadialStacked } from "@/components/Radial-chart";
// import { DotIcon } from "lucide-react";
// import { useParams } from "react-router";

// const LandingPage = () => {

//   const cardColor = ["#E3F5FF", "#E5ECF6"];

//   const TotalSales = [
//     {
//       title: "Direct",
//       value: 300.56,
//       color: "#95A4FC",
//     },
//     {
//       title: "Affiliate",
//       value: 135.18,
//       color: "#B1E3FF",
//     },
//     {
//       title: "Sponsored",
//       value: 154.02,
//       color: "#BAEDBD",
//     },
//     {
//       title: "Email",
//       value: 48.96,
//       color: "#C6C7F8",
//     },
//   ];

//   return (
//     // <div className=" flex flex-col gap-6 min-w-0   ">
//     //   <h1 className="text-sm font-bold text-left mt-4">eCommerce</h1>
//     //   <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 sm:h-63 ">
//     //     <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6   ">
//     //       {stats?.map((stat, index) => {
//     //         const bg =
//     //           index % 3 === 0
//     //             ? cardColor[Math.floor(index / 3) % cardColor.length]
//     //             : "#black";
//     //         return <StatCard key={index} data={stat} bg={bg} />;
//     //       })}
//     //     </div>
//     //     <ChartBarStacked className=""/>
//     //   </div>
//     //   {/* line chart */}
//     //   <div className="flex flex-col sm:flex-row justify-between gap-6">
//     //     <ChartLineMultiple  />
//     //     {/* revenue stats */}
//     //     <Card className="min-w-0">
//     //       <CardHeader>
//     //         <CardTitle>Revenue by Location</CardTitle>
//     //       </CardHeader>
//     //       <img className="w-[70%] h-40 max-w-full sm:h-22 sm:w-38 m-auto" src="worldMap.png" alt="worldmap" />

//     //       <CardContent>
//     //         <div className="flex flex-col gap-4">
//     //           {revenuestats?.map((stat, index) => (
//     //             <CustomStrip key={index} data={stat} />
//     //           ))}
//     //         </div>
//     //       </CardContent>
//     //     </Card>
//     //   </div>
//     //   {/* Table */}
//     //   <div className="flex flex-col gap-6 sm:flex-row ">
//     //     <Card className="flex sm:basis-3/4">
//     //       <CardHeader>
//     //         <CardTitle className="text-left">Top Selling Products</CardTitle>
//     //       </CardHeader>
//     //       <CardContent>
//     //         <TableDemo data={TableData} />
//     //       </CardContent>
//     //     </Card>
//     //     {/* Radial chart */}
//     //     <Card className=" flex-1 basis-1/4">
//     //       <CardHeader>
//     //         <CardTitle className="text-left">Total Sales</CardTitle>
//     //       </CardHeader>
//     //       <CardContent>
//     //         <ChartRadialStacked />
//     //       </CardContent>
//     //       <CardFooter className="flex flex-col  justify-center">
//     //         {TotalSales?.map((sale, index) => (
//     //           <div
//     //             key={index}
//     //             className="flex items-center justify-between  w-full"
//     //           >
//     //             <h1 className="flex items-center text-[12px]">
//     //               <DotIcon color={sale.color} size={30} />
//     //               {sale.title}
//     //             </h1>
//     //             <h1 className="text-[12px]">${sale.value}</h1>
//     //           </div>
//     //         ))}
//     //       </CardFooter>
//     //     </Card>
//     //   </div>
//     // </div>

//     <div className="flex flex-col gap-6 overflow-x-hidden">
//   <h1 className="text-sm font-bold text-left mt-4">eCommerce</h1>

//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:h-63 min-w-0">
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
//       {stats?.map((stat, index) => {
//         const bg =
//           index % 3 === 0
//             ? cardColor[Math.floor(index / 3) % cardColor.length]
//             : "#000";
//         return (
//           <StatCard
//             key={index}
//             data={stat}
//             bg={bg}
//             className="w-full"
//           />
//         );
//       })}
//     </div>
//     <ChartBarStacked className="w-full" />
//   </div>
//    {/* line chart */}
// <div className="flex flex-col sm:flex-row justify-between gap-6 min-w-0">
//   <div className="w-full sm:w-2/3 min-w-0">
//     <ChartLineMultiple />
//   </div>
// {/* Revenue */}
//   <Card className="w-full sm:w-1/3 min-w-0">
//     <CardHeader>
//       <CardTitle>Revenue by Location</CardTitle>
//     </CardHeader>
//     <img
//       className="w-[70%] max-w-full h-40 sm:h-22 sm:w-38 m-auto"
//       src="worldMap.png"
//       alt="worldmap"
//     />
//     <CardContent>
//       <div className="flex flex-col gap-4">
//         {revenuestats?.map((stat, index) => (
//           <CustomStrip key={index} data={stat} />
//         ))}
//       </div>
//     </CardContent>
//   </Card>
// </div>

// {/* Table + radial chart */}
// <div className="flex flex-col gap-6 sm:flex-row min-w-0">
//   <Card className="flex flex-col w-full sm:basis-3/4 min-w-0">
//     <CardHeader>
//       <CardTitle className="text-left">Top Selling Products</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <TableDemo data={TableData} />
//     </CardContent>
//   </Card>
// {/* Radial */}
//   <Card className="flex-1 basis-1/4 min-w-0">
//     <CardHeader>
//       <CardTitle className="text-left">Total Sales</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <ChartRadialStacked />
//     </CardContent>
//     <CardFooter className="flex flex-col justify-center">
//       {TotalSales?.map((sale, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-between w-full"
//         >
//           <h1 className="flex items-center text-[12px]">
//             <DotIcon color={sale.color} size={30} />
//             {sale.title}
//           </h1>
//           <h1 className="text-[12px]">${sale.value}</h1>
//         </div>
//       ))}
//     </CardFooter>
//   </Card>
// </div>

// </div>

//   );
// };

// export default LandingPage;

// new
import { DropdownMenuRadioGroupDemo } from "@/components/drawer";
import { ModeToggle } from "@/components/mode-toggle";
import StatCard from "@/components/Stat-Card";
import { Button } from "@/components/ui/button";
import React from "react";
import stats from "../../Mock-Data/Stat-CardData.json";
import TableData from "../../Mock-Data/Table-Data.json";
import revenuestats from "../../Mock-Data/Revenue-stat.json";
import { ChartBarStacked } from "@/components/Bar-chart";
import { ChartLineMultiple } from "@/components/Line-chart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Strip } from "@/components/ui/strip";
import { cn } from "@/lib/utils";
import { CustomStrip } from "@/components/custom-Strip";
import { TableDemo } from "@/components/ui/Table";
import { ChartRadialStacked } from "@/components/Radial-chart";
import { DotIcon, Square } from "lucide-react";
import { useParams } from "react-router";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const LandingPage = () => {
  const cardColor = ["#E3F5FF", "#E5ECF6"];

  const TotalSales = [
    {
      title: "Direct",
      value: 300.56,
      color: "#95A4FC",
    },
    {
      title: "Affiliate",
      value: 135.18,
      color: "#B1E3FF",
    },
    {
      title: "Sponsored",
      value: 154.02,
      color: "#BAEDBD",
    },
    {
      title: "Email",
      value: 48.96,
      color: "#C6C7F8",
    },
  ];

  return (
    <div className=" flex flex-col gap-6 overflow-x-hidden  mx-auto px-4">
      <h1 className="text-sm font-bold text-left mt-4">eCommerce</h1>

      {/* Stats and Bar Chart */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
          {stats?.map((stat, index) => {
            const bg =
              index % 3 === 0
                ? cardColor[Math.floor(index / 3) % cardColor.length]
                : "#black";
            return (
              <StatCard key={index} data={stat} bg={bg} className="w-full" />
            );
          })}
        </div>
        <ChartBarStacked className="w-full max-w-full" />
      </div>

      {/* Line Chart and Revenue Stats */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 min-w-0">
        <ChartLineMultiple className="w-full sm:flex-1 min-w-0" />
        {/* revenue */}
        <Card className="w-full sm:max-w-1/4 min-w-0">
          <CardHeader>
            <CardTitle className="text-left text-sm">
              Revenue by Location
            </CardTitle>
          </CardHeader>
          <Tooltip>
            <TooltipTrigger asChild>
              <img
              className="  w-[70%] max-w-full h-40 sm:h-[25%] m-auto 
              hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer
              "
              src="worldMap.png"
              alt="worldmap"
            />
            </TooltipTrigger>
            <TooltipContent className="bg-white dark:bg-black border">
              <div className="  w-30">
                {revenuestats?.map((stat,index)=>
                <div key={index} className="flex items-center justify-between">
                  <div className="flex gap-0.5 items-center">
                  <Square size={12} color={stat.color} fill={stat.color}/> 
                  <p className="text-black dark:text-white text-[10px]">{stat.title}</p>
                  </div>
                <h1 className="text-black dark:text-white tracking-tighter text-[13px]">{stat.val}</h1>
                </div>
              )}
              </div>
            </TooltipContent>
          </Tooltip>
          
          <CardContent className="  ">
            <div className="flex flex-col gap-4">
              {revenuestats?.map((stat, index) => (
                <CustomStrip key={index} data={stat} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table and Radial Chart */}
      <div className="  flex flex-col sm:flex-row gap-6 w-full">
        <Card className="sm:basis-1/1 w-full min-w-0  ">
          <CardHeader>
            <CardTitle className="text-left">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <TableDemo data={TableData} />
          </CardContent>
        </Card>
        {/* radial */}
        <Card className="w-full sm:max-w-1/4 min-w-0">
          <CardHeader>
            <CardTitle className="text-left">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartRadialStacked className="w-full max-w-[120px] m-auto" />
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            {TotalSales?.map((sale, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
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
    </div>
  );
};

export default LandingPage;
