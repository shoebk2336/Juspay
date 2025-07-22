import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { TrendingDown, TrendingUp } from 'lucide-react'

const StatCard = ({data,bg}) => {
    const {id,title,score,percentage}=data
    const Tcolor=(id%3==0)?"black-500":"white-500"
  return (
    <Card
    style={{ backgroundColor: bg }}
    className={`w-50 h-28 flex justify-center ${
        id % 3 === 0 ? 'text-black' :null
      }`} >
        <CardHeader className="">
            <CardTitle className='text-sm mb-2 text-left'>{title}</CardTitle>
            <div className='flex items-center justify-between'>
            <h1 className='text-[24px]'>{score}</h1>
            <p className='text-[12px] flex gap-1'>{percentage}% 

                {percentage>1?<TrendingUp size={16}/>:<TrendingDown className='rotate-y-180' size={16}/>}
            </p>
            </div>
        </CardHeader>
        
      
    </Card>
  )
}

export default StatCard
