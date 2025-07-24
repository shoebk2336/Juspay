import React from 'react'
import { ChartLineMultiple } from './Line-chart'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Square } from 'lucide-react'
import revenuestats from "../../Mock-Data/Revenue-stat.json";
import { CustomStrip } from './custom-Strip'

const LandingLinewithRevenue = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:max-h-90 ">
        <ChartLineMultiple className=" sm:flex-1" />

        {/* Revenue Card */}
        <Card className="w-full sm:max-w-[30%] ">
          <CardHeader>
            <CardTitle className="text-left text-sm">
              Revenue by Location
            </CardTitle>
          </CardHeader>

          <Tooltip>
            <TooltipTrigger asChild>
              <img
                className="w-[60%] max-w-full h-40 sm:h-[25%] m-auto hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                src="worldMap.png"
                alt="worldmap"
              />
            </TooltipTrigger>
            <TooltipContent className="bg-white dark:bg-black border">
              <div className="w-30">
                {revenuestats?.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex gap-0.5 items-center">
                      <Square size={12} color={stat.color} fill={stat.color} />
                      <p className="text-black dark:text-white text-[10px]">
                        {stat.title}
                      </p>
                    </div>
                    <h1 className="text-black dark:text-white tracking-tighter text-[13px]">
                      {stat.val}
                    </h1>
                  </div>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>

          <CardContent>
            <div className="flex flex-col gap-4">
              {revenuestats?.map((stat, index) => (
                <CustomStrip key={index} data={stat} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  )
}

export default LandingLinewithRevenue
