import Layout_admin from '@/components/layout/layout_admin/Layout_admin'
import Pagination from '@/components/admin/financial/Pagination'
import Date from '@/components/user/date/Date'
import React from 'react'

const Financial = () => {

    const his = [
        { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },
        { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "در انتظار پرداخت..." },
        { id: 3, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "در انتظار پرداخت..." },
        { id: 4, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },
        { id: 5, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },
        { id: 6, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },
        { id: 7, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },

    ]

    return (

        <Layout_admin>

            <div className='flex flex-col gap-2  w-[65%] h-[52vh] '>
                <div className='flex justify-between px-6 py-5'>

                    <h2 className='text-lg'>تراکنش مالی</h2>
                    <div className='flex gap-4'>
                        <Date />
                        <Date />
                    </div>
                </div>


                <div className='flex flex-col rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] '>

                    <div className='flex flex-1 justify-around border-solid border-b-[1px] border-[#CECECE] py-5 '>
                        <p className='text-sm font-bold flex justify-center translate-x-3 w-[10%]'>#</p>
                        <p className='text-sm font-bold flex justify-center translate-x-3 w-[10%]'>نام دوره</p>
                        <p className='text-sm font-bold flex justify-center translate-x-3 w-[10%]'>تاریخ</p>
                        <p className='text-sm font-bold flex justify-center translate-x-3 w-[10%]'>مبلغ</p>
                        <p className='text-sm font-bold flex justify-center translate-x-3 w-[10%]'>وضعیت</p>
                    </div>
                    <div>

                        {his.map((item, i) => {
                            return (
                                <div>
                                    <div className='flex justify-around mb-1 py-3'>
                                        <p className='text-sm flex justify-center w-[12%]'>{i + 1}</p>
                                        <p className='text-sm flex justify-center w-[12%]'>{item.name}</p>
                                        <p className='text-sm flex justify-center w-[12%]'>{item.date}</p>
                                        <p className='text-sm flex justify-center w-[12%]'>{item.price}</p>
                                        <p className='text-sm text-[#393] flex justify-center w-[12%]'>{item.status}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <Pagination />
                    </div>
                </div>
            </div>

        </Layout_admin>
    )
}

export default Financial
