import SearchBar from '@/components/SearchBar'
import { Card } from '@/components/ui/card'
import { ArrowUpDownIcon, FilterIcon, ListFilterIcon, PlusIcon, SortAsc } from 'lucide-react'
import OrderListData from '../../Mock-Data/OrderList-Data.json'
import React from 'react'
import { OrderListTable } from '@/components/OrderList-Table'
import { AddOrderDrawer } from '@/components/AddOrder-Drawer'
import { OrderSortDropdown } from '@/components/OrderSort-Dropdown'
import { OrderFilterDropdown } from '@/components/OrderFilter-Dropdown'
import { useSelector,useDispatch } from 'react-redux'

const OrderList = () => {
  const FilteredOrders=useSelector(state=>state.Orders?.filterOrders)
  const AllOrders=useSelector(state=>state.Orders?.orders)
  const OrderTobeDisplayed=FilteredOrders.length>0?FilteredOrders:AllOrders


  return (
    <div className='p-2'>
        <h1 className='text-left text-sm font-bold mb-8'>Order List</h1>
        {/* sub-Nav section */}
        <div className='grid gap-4'>
          <div className='flex justify-between px-3 items-center w-full border border-input h-11 rounded-sm bg-neutral-800'>
            <div className='w-1/7  flex items-center justify-between'>
                {/* <PlusIcon size={20}/> */}
                <AddOrderDrawer/>
                {/* <ListFilterIcon size={20}/> */}
                <OrderFilterDropdown/>
                <OrderSortDropdown/>
                {/* <ArrowUpDownIcon size={20}/> */}
              </div>
              <SearchBar/>
          </div>
          {/* Table section */}
          <OrderListTable data={OrderTobeDisplayed}/>
        </div>
    </div>
  )
}

export default OrderList

