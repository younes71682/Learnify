import React from 'react'
import Date from '@/components/user/date/Date'
import Layout_profil_modares from '@/components/layout/Layout_modares/Layout_profil_modares'
import Link from 'next/link'


export const Editcourse = () => {

    const data = [
        { id: 1, title: 'آموزش کاربردی اتوکد', date: '1402/7/28' },
        { id: 2, title: 'آموزش کاربردی اتوکد', date: '1402/7/28' },
        { id: 3, title: 'آموزش کاربردی اتوکد', date: '1402/7/28' },
        { id: 4, title: 'آموزش کاربردی اتوکد', date: '1402/7/28' },
    ]

    return (
        <Layout_profil_modares>

            <div className='flex flex-col gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[64%] h-[420px] overflow-y-auto'>
                <div className='flex  justify-between px-8 py-5'>
                    <div className='flex  gap-4'>
                        <Date />
                        <Date />
                    </div>
                </div>
                <div className='flex  gap-6 flex-wrap px-8 '>
                    {data.map((item) => {
                        return (
                            <div className='w-[175px] text-center h-[142px] rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>
                                <p className='text-sm mt-4'>{item.title}</p>
                                <div className='flex justify-between px-4 my-4 items-center'>
                                    <div className='text-sm'>تاریخ درخواست</div>
                                    <div className='text-[10px] font-bold'>{item.date}</div>
                                </div>
                                <Link href={`/modares/teaching/${item.id}`} className='bg-[#008000] text-white w-[144px] h-[37px] rounded-md'>ویرایش اطلاعات</Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Layout_profil_modares>

    )
}

export default Editcourse