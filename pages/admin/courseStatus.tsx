// @ts-nocheck
import React, { useState } from 'react'
import Switch from "react-switch";
import Layout_admin from '@/components/layout/layout_admin/Layout_admin';
import Link from 'next/link';


export const CourseStatus = () => {
    const data = [
        { id: 1, title: 'آموزش کاربردی اتوکد', mentor: 'سلمان طاهری', date: '1402/7/28' },
        { id: 1, title: 'آموزش کاربردی اتوکد', mentor: 'سلمان طاهری', date: '1402/7/28' },
        { id: 1, title: 'آموزش کاربردی اتوکد', mentor: 'سلمان طاهری', date: '1402/7/28' },
    ]

    const [showCourseConfirmation, setShowCourseConfirmation] = useState(false)

    const handleConfirm = () => {
        setShowCourseConfirmation(true)
    }
    const [lessonVisible, setLessonVisible] = useState(false)


    const switchVisibility = () => {
        setLessonVisible(!lessonVisible)
    }



    return (

        <Layout_admin>


            <div className='flex flex-col gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[65%] h-[60vh] '>
                <div className='flex  justify-between px-8 py-5'>
                </div>
                <p className='px-8 font-bold mb-4'>
                    درخواست های انتشار دوره
                </p>
                <div className='flex  gap-6 flex-wrap px-8 '>
                    {data.map((item) => {
                        return (
                            <div className='w-[226px] text-center  h-[178px] rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>
                                <div className='text-right px-4 my-1'>
                                    <p className='text-sm mt-4'>{item.title}</p>
                                    <p className='text-sm mt-1'>{item.mentor}</p>
                                </div>
                                <div className='flex justify-between px-4 my-4 items-center'>
                                    <div className='text-sm'>تاریخ درخواست</div>
                                    <div className='text-[10px] font-bold'>{item.date}</div>
                                </div>
                                <Link href={`/admin/showinfo/${item.id}`} className='bg-[#008000] text-white w-[194px] h-[37px] rounded-md'>ویرایش اطلاعات</Link>
                            </div>
                        )
                    })}
                </div>
            </div>




        </Layout_admin>
    )
}
export default CourseStatus