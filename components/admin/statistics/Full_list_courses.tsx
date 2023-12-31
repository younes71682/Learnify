import Date from '@/components/user/date/Date'
import React from 'react'

const Full_list_courses = () => {

  const his = [
    { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", price: "1,267,000", status: "فعال" },
    { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", price: "1,267,000", status: "فعال" },
    { id: 3, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", price: "1,267,000", status: "فعال" },
    { id: 4, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", price: "1,267,000", status: "غیرفعال" },
    { id: 5, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", price: "1,267,000", status: "فعال" },
 
  ]

  return (
    <div className='flex flex-col gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] h-[380px] overflow-y-auto'>


      <div className='flex flex-col  '>

        <div className='flex flex-1 justify-around rounded-[5px_5px_0_0] bg-[#F5F5F5] py-5 sticky top-0'>
          <p className='text-sm font-bold flex justify-center w-[10%]'>نام دوره</p>
          <p className='text-sm font-bold flex justify-center w-[10%]'>تاریخ شروع دوره</p>
          <p className='text-sm font-bold flex justify-center w-[10%]'>تعداد دانشجو</p>
          <p className='text-sm font-bold flex justify-center w-[10%]'>میزان فروش</p>
          <p className='text-sm font-bold flex justify-center w-[10%]'>وضعیت دوره</p>
        </div>

        {his.map((item, i) => {
          return (
            <div className='flex justify-around rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.09)] mb-1 py-5 '>
              <p className='text-sm flex justify-center w-[12%]'>{item.name}</p>
              <p className='text-sm flex justify-center w-[12%] font-Byekan'>{item.date}</p>
              <p className='text-sm flex justify-center w-[12%] font-Byekan'>{item.number}</p>
              <p className='text-sm flex justify-center w-[12%] font-Byekan'>{item.price}</p>
              <p className='text-sm flex justify-center w-[12%]'>{item.status}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Full_list_courses
