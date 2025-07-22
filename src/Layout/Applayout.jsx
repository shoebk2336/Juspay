import Header from '@/components/Header'
import  { CustomDataBox } from '@/components/Icon-text'
import LeftsideBar from '@/components/Left-sideBar'
import Notification from '../../Mock-Data/Right-Notification.json'
import Activities from '../../Mock-Data/Right-Activities.json'
import Contacts from '../../Mock-Data/Right-Contacts.json'

import React from 'react'
import { Outlet } from 'react-router'
import CollapseNav from '@/components/collapse-Nav'

const Applayout = () => {
  return (
    <main className="flex max-w-[1440px] mx-auto ">
      <LeftsideBar className="w-53 border-r" />

      <div className="flex flex-col flex-1">
        <Header className="border-b" />

        <div className="flex-1  p-4">
          <Outlet />
        </div>
      </div>
      {/* right sidebar */}
      <div className='border-l h-300 w-70 p-4 flex flex-col gap-12 '>
        <CustomDataBox data={Notification}/>
        <CustomDataBox data={Activities}/>
        <CustomDataBox data={Contacts}/>

        
      </div>
    </main>
  )
}

export default Applayout
