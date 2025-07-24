import React from 'react'
import StatCard from './Stat-Card';
import { ChartBarStacked } from "@/components/Bar-chart";
import stats from "../../Mock-Data/Stat-CardData.json";


const LandingBarwithTiles = () => {
    const cardColor = ["#E3F5FF", "#E5ECF6"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        <ChartBarStacked className="w-full" />
      </div>
  )
}

export default LandingBarwithTiles
