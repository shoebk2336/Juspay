import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const StatCard = ({ data, bg }) => {
  const { id, title, score, percentage } = data;
  const Tcolor = id % 3 == 0 ? "black-500" : "white-500";
  return (

      
    <Card
      // w-50 h-28
      style={{ backgroundColor: bg }}
      className={`hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer h-28   flex justify-center ${
        id % 3 === 0 ? "text-black" : null
      }`}
    >
      <CardHeader className="px-3">
        <CardTitle className="text-sm mb-2 text-left p-0">{title}</CardTitle>
        <div className=" flex flex-wrap min-w-0  gap-1 items-center justify-between">
          <h1 className="text-lg sm:text-[24px]">{score}</h1>
          <p className=" text-[12px] flex items-center gap-1">
            {percentage}%
            {percentage > 1 ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown className="rotate-y-180" size={16} />
            )}
          </p>
        </div>
      </CardHeader>
    </Card>
    
  );
};

export default StatCard;
