import { DropdownMenuRadioGroupDemo } from '@/components/drawer'
import { ModeToggle } from '@/components/mode-toggle'
import StatCard from '@/components/Stat-Card'
import { Button } from '@/components/ui/button'
import React from 'react'
import stats from '../../Mock-Data/Stat-CardData.json'
import TableData from '../../Mock-Data/Table-Data.json'
import revenuestats from '../../Mock-Data/Revenue-stat.json'
import { ChartBarStacked } from '@/components/Bar-chart'
import { ChartLineMultiple } from '@/components/Line-chart'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Strip } from '@/components/ui/strip'
import { cn } from "@/lib/utils"
import { CustomStrip } from '@/components/custom-Strip'
import { TableDemo } from '@/components/ui/Table'
import { ChartRadialStacked } from '@/components/Radial-chart'
import { DotIcon } from 'lucide-react'



const LandingPage = () => {
  const cardColor=["#E3F5FF","#E5ECF6"]

  const TotalSales=[
    {
      title:"Direct",
      value:300.56,
      color:"#95A4FC"
    },
    {
      title:"Affiliate",
      value:135.18,
      color:"#B1E3FF"
    },
    {
      title:"Sponsored",
      value:154.02,
      color:"#BAEDBD"
    },
    {
      title:"Email",
      value:48.96,
      color:"#C6C7F8"
    },
  ]

  return (
    <div className='flex flex-col gap-4 my-10  mx-2  '>
      <div className='flex justify-between'>
        <div className='grid grid-cols-2 w-108 h-63 gap-6 '>
          {stats?.map((stat,index)=>{
            const bg = index % 3 === 0? cardColor[Math.floor(index / 3) % cardColor.length]:
            '#black'        
            return (<StatCard key={index} data={stat} bg={bg}/>)
          })}
        </div>
        <ChartBarStacked/>
      </div>
      {/* line chart */}
      <div className='flex justify-between'>
          <ChartLineMultiple/>
          {/* revenue stats */}
          <Card className='w-51 h-80 gap-0'>
            <CardHeader>
              <CardTitle>Revenue by Location</CardTitle>
            </CardHeader>
            <img className='w-38 m-auto' src='worldMap.png' alt='worldmap'/>

            <CardContent>
              <div className='flex flex-col gap-4'>
                {revenuestats?.map((stat,index)=>
                <CustomStrip key={index} data={stat}/>
                )}
              </div>
            
            </CardContent>

           </Card>
      </div>
      {/* Table */}
      <div className='flex justify-between'>
        <Card className="w-166 h-80 gap-1">
          <CardHeader>
            <CardTitle className="text-left">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <TableDemo data={TableData}/>
          </CardContent>
        </Card>
        {/* Radial chart */}
        <Card className="w-51 h-80 gap-2">
          <CardHeader>
            <CardTitle className="text-left">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartRadialStacked/>
          </CardContent>
          <CardFooter className='flex flex-col  justify-center'>
            {TotalSales?.map((sale,index)=>(
              <div key={index} className='flex items-center justify-between  w-full'>
                <h1 className='flex items-center text-[12px]'>
                  <DotIcon color={sale.color} size={30}/>
                  {sale.title}
                </h1>
                <h1 className='text-[12px]'>${sale.value}</h1>
              </div>
            ))}
          </CardFooter>
        </Card>
      </div>
      
    </div>
  )
}

export default LandingPage

