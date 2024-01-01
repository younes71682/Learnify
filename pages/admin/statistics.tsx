import Full_list_courses from '@/components/admin/statistics/Full_list_courses'
import Date from '@/components/user/date/Date'
import React from 'react'
import My_sales from '@/components/admin/statistics/My_sales'
import Teacher_sales from '@/components/admin/statistics/Teacher_sales'
import Most_visited_course from '@/components/admin/statistics/Most_visited_course'
import Layout_admin from '@/components/layout/Layout_admin'

const statistics = () => {
    return (

        <Layout_admin>

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

        </Layout_admin>
    )
}

export default statistics
