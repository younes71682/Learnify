import Date from '@/components/user/date/Date'
import React from 'react'

const My_sales = () => {
  return (
    <div className='flex flex-col gap-6 pt-5 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[48%] h-[39vh]'>
      <div className='flex justify-between items-center px-4 '>
        <h3>سهم فروش برای ما</h3>
        <div className='flex justify-between gap-3'>
          <Date />
          <Date />
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default My_sales
