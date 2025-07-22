import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Boxes, ChartPie, DotIcon, MessagesSquareIcon, NotebookPen, SquareUserIcon, User, Users2Icon } from "lucide-react"
import React from 'react'
import CollapseNav from "./collapse-Nav"
import LeftDashAccord from '../../Mock-Data/Left-DashAccord.json'
import LeftPageAccord from '../../Mock-Data/Left-PageAccord.json'
import { Link } from "react-router"
const LeftsideBar = () => {
  return (
    <div className='hidden sm:block w-54 h-300 border-r border-input p-4'>
      <div className=" flex items-center gap-2">
        <Avatar className="aspect-square w-8 h-8 ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-sm font-bold">Shoeb Khan</h1>
      </div>
      {/* favourite section */}
      <div className=" grid gap-2 mt-6">
        <div className="flex gap-6 hover:cursor-pointer">
          <h1 className="text-sm text-gray-400">Favorites</h1>
          <h1 className="text-sm text-gray-600">Recently</h1>
        </div>
        <Link to='/'>
        <h1 className="hover:cursor-pointer flex text-sm text-left"><DotIcon size={24}/>Dashboard</h1>
        </Link>
        <Link to='/order'>
        <h1 className="hover:cursor-pointer flex text-sm text-left"><DotIcon size={24}/>Order List</h1>
        </Link>
      </div>
      {/* leftsidebar-Dashboards */}
      <div className="grid gap-4 mt-6">
        <h1 className=" text-sm text-gray-400 text-left">Dashboards</h1>
        <div className="grid gap-6">
          <h1 className=" hover:cursor-pointer px-5 flex items-center gap-2 text-sm ">
            <ChartPie className="rotate-270" size={20}/>
            Defaults
          </h1>
          {LeftDashAccord?.map((accord,index)=>(
            <CollapseNav key={index} data={accord} />
          ))}

        </div>
      </div>
      {/* leftsidebar-pages */}
      <div className="grid gap-4 mt-6">
        <h1 className="text-sm text-gray-400 text-left">Pages</h1>
        <div className="grid gap-6">
          {/* <h1 className="  px-5 flex items-center gap-2 text-sm ">
            <ChartPie className="rotate-270" size={20}/>
            Defaults
          </h1> */}
          {LeftPageAccord?.map((accord,index)=>(
            <CollapseNav key={index} data={accord} />
          ))}
        
        
        </div>
      </div>
      
    </div>
  )
}

export default LeftsideBar
