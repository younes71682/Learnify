import Sidebar from '@/components/modares/Account/Sidebar'
import Date from '@/components/user/date/Date'
import Layout_User from '@/components/user/layout_user/Layout_User'
import React from 'react'

const financial = () => {

    const his = [
        { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },
        { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "در انتظار پرداخت..." },
        { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },

    ]
 

    return (
        <Layout_User showFooter={false}>
            <div className='flex justify-center gap-6 h-[150px] pt-24 '>
                <Sidebar />

                <div className='flex flex-col gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[65%] h-[52vh] overflow-y-auto'>

                    <div className='flex justify-between px-8 py-5'>

                        <h2 className='text-lg'>لیست کامل دوره ها</h2>
                        <div className='flex gap-4'>
                            <Date />
                            <Date />
                        </div>
                    </div>

                    <div className='flex flex-col px-8 '>

                        <div className='flex flex-1 justify-around rounded-[5px_5px_0_0] border-solid border-[0.3px] border-[#E6F2E6] py-5 '>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>#</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>نام دوره</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>تاریخ</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>مبلغ</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>وضعیت</p>
                        </div>

                        {his.map((item, i) => {
                            return (
                                <div className='flex justify-around rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.09)] mb-1   py-5 '>
                                    <p className='text-sm flex justify-start w-[12%]'>{i + 1}</p>
                                    <p className='text-sm flex justify-start w-[12%]'>{item.name}</p>
                                    <p className='text-sm flex justify-start w-[12%]'>{item.date}</p>
                                    <p className='text-sm flex justify-start w-[12%]'>{item.price}</p>
                                    <p className='text-sm flex justify-start w-[12%]'>{item.status}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </Layout_User >
    )
}

export default financial
