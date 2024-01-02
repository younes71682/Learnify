import Layout_admin from '@/components/layout/layout_admin/Layout_admin'
import Chart_sell from '@/components/admin/overview/Chart_sell'
import Selling_course from '@/components/admin/overview/Selling_course'
import Status from '@/components/admin/overview/Status'
import Top_teacher from '@/components/admin/overview/Top_teacher'
import Date from '@/components/user/date/Date'
import Image from 'next/image'

import React from 'react'

const index = () => {
    return (

        <Layout_admin>

            <div className='flex flex-col w-[65%] gap-6 '>

                <div className='flex justify-between'>
                    <div className='flex items-center justify-between w-[8.5%]'>
                        <Image src="/icon/admin/sidbar/overwiew.svg" alt='overview' width={24} height={24} />
                        <p className='text-[#484848] font-bold'>نمای کلی</p>
                    </div>
                    <div className='flex items-center justify-between w-[28%]'>
                        <Date />
                        <Date />
                    </div>
                </div>
                <div>

                    <Status />
                </div>

                <div className='flex items-center gap-7 h-[330px]'>
                    <Selling_course />
                    <Top_teacher />
                </div>

                <Chart_sell />
            </div>

        </Layout_admin >
    )
}

export default index
