import { Bell, Clock, CommandIcon, Search, SearchIcon, Sidebar, SidebarClose, SidebarIcon, Star } from 'lucide-react'
import React from 'react'
import { BreadcrumbWithCustomSeparator } from './BreadCrumb'
import { Input } from './ui/input'
import { Command } from './ui/command'
import { CommandInput } from 'cmdk'
import {RxCounterClockwiseClock} from 'react-icons/rx'
import { ModeToggle } from './mode-toggle'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='h-17 w-[100%] border border-input border-l-0 border-r-0 flex justify-between gap-4 items-center p-2 sm:p-6'>
      <div className='flex justify-between w-14 sm:w-55   items-center'>
        <Sidebar size={20}/>
        <Star size={20}/>
        <BreadcrumbWithCustomSeparator/>
      </div>
      {/* search bar */}
      <div className=' flex sm:gap-4'>
        <SearchBar/>
        <div className='w-35 sm:w-34 h-7  flex justify-between items-center'>
            <ModeToggle />
            <RxCounterClockwiseClock size={20}/>
            <Bell size={20}/>
            <SidebarIcon size={20}/>

        </div>
      </div>
    </div>
  )
}

export default Header
