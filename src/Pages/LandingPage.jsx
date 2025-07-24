

import { DropdownMenuRadioGroupDemo } from "@/components/drawer";
import { ModeToggle } from "@/components/mode-toggle";
import StatCard from "@/components/Stat-Card";
import { Button } from "@/components/ui/button";
import React from "react";
import stats from "../../Mock-Data/Stat-CardData.json";
import { ChartBarStacked } from "@/components/Bar-chart";
import { ChartLineMultiple } from "@/components/Line-chart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomStrip } from "@/components/custom-Strip";
import { TableDemo } from "@/components/ui/Table";
import { ChartRadialStacked } from "@/components/Radial-chart";
import { DotIcon, Square } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import LandingTablewithRadial from "@/components/Landing-TablewithRadial";
import LandingLinewithRevenue from "@/components/Landing-LinewithRevenue";
import LandingBarwithTiles from "@/components/Landing-BarwithTiles";

const LandingPage = () => {
  const cardColor = ["#E3F5FF", "#E5ECF6"];

 

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden mx-auto px-4 max-w-full">
      <h1 className="text-sm font-bold text-left mt-4">eCommerce</h1>

      {/* Stats and Bar Chart */}
      <LandingBarwithTiles/>

      {/* Line Chart and Revenue Stats */}
      <LandingLinewithRevenue/>

      {/* Table and Radial Chart */}
      <LandingTablewithRadial/>
      
    </div>
  );
};

export default LandingPage;
