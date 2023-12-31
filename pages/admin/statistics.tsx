import Sidebar from '@/components/admin/Sidebar'
import Chchart from '@/components/admin/statistics/My_sales'
import Full_list_courses from '@/components/admin/statistics/Full_list_courses'
import Date from '@/components/user/date/Date'
import React from 'react'
import My_sales from '@/components/admin/statistics/My_sales'
import Teacher_sales from '@/components/admin/statistics/Teacher_sales'
import Most_visited_course from '@/components/admin/statistics/Most_visited_course'

const statistics = () => {
    return (
        <div className='flex justify-center gap-6 mt-28 h-[180vh]'>
            <Sidebar />
            <div className='flex flex-col w-[65%] gap-6'>

                <div className='flex justify-between px-8 py-5'>
                    <h2 className='text-lg'>لیست کامل دوره ها</h2>
                    <div className='flex gap-4'>
                        <Date />
                        <Date />
                    </div>
                </div>
                <div>

                    <Full_list_courses />
                </div>

                <div className='flex items-center justify-between h-[270px]'>
                    <My_sales />
                    <Teacher_sales />
                </div>
                <Most_visited_course />
            </div>
        </div>
    )
}

export default statistics
