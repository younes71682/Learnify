// @ts-nocheck
import React, { useState } from 'react'
import Sidebar from '@/components/admin/Sidebar'
import Switch from "react-switch";


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


    console.log(showCourseConfirmation)
    return (

        <div className=''>

            {showCourseConfirmation === false ? (< div className='flex justify-center gap-6 h-[180px] pt-28 ' >
                <Sidebar />
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
                                    <button onClick={handleConfirm} className='bg-[#008000] text-white w-[194px] h-[37px] rounded-md'>ویرایش اطلاعات</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
            ) : (
                <div>
                    <div className='w-[1234px] mx-auto mt-20 mb-10 border p-8 pb-[150px] rounded-2xl bg-[#F4F4F4]'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g id="vuesax/linear/note-2">
                                    <g id="note-2">
                                        <path id="Vector" d="M21.6602 10.4395L20.6802 14.6195C19.8402 18.2295 18.1802 19.6895 15.0602 19.3895C14.5602 19.3495 14.0202 19.2595 13.4402 19.1195L11.7602 18.7195C7.59018 17.7295 6.30018 15.6695 7.28018 11.4895L8.26018 7.29952C8.46018 6.44952 8.70018 5.70952 9.00018 5.09952C10.1702 2.67952 12.1602 2.02952 15.5002 2.81952L17.1702 3.20952C21.3602 4.18952 22.6402 6.25952 21.6602 10.4395Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Vector_2" d="M15.0603 19.3896C14.4403 19.8096 13.6603 20.1596 12.7103 20.4696L11.1303 20.9896C7.16034 22.2696 5.07034 21.1996 3.78034 17.2296L2.50034 13.2796C1.22034 9.30961 2.28034 7.20961 6.25034 5.92961L7.83034 5.40961C8.24034 5.27961 8.63034 5.16961 9.00034 5.09961C8.70034 5.70961 8.46034 6.44961 8.26034 7.29961L7.28034 11.4896C6.30034 15.6696 7.59034 17.7296 11.7603 18.7196L13.4403 19.1196C14.0203 19.2596 14.5603 19.3496 15.0603 19.3896Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Vector_3" d="M12.6396 8.53027L17.4896 9.76027" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Vector_4" d="M11.6602 12.4004L14.5602 13.1404" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg>
                            <h1 className='mr-[10px] font-bold text-xl text-[#484848]'>سرفصل ها</h1>
                        </div>
                        <div className='flex'>
                            <div className='mt-[47px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>فصل 1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="vuesax/bold/add-square">
                                            <g id="add-square">
                                                <path id="Vector" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#292D32" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='عنوان فصل' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>فصل 1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="vuesax/bold/add-square">
                                            <g id="add-square">
                                                <path id="Vector" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#292D32" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='عنوان فصل' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>زمان</p>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='47 دقیقه' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] text-center'>
                                <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                <Switch className='mt-5' onColor='#21005D' onChange={switchVisibility} checked={lessonVisible} />
                            </div>
                            <div className='mt-[47px] mr-[56px] text-center'>
                                <p className='font-bold text-lg'>اپلود درس</p>
                                
                                <form action="" onClick={() => document.querySelector('.uploadBtn').click()} className='border-dashed border p-2 px-4 rounded-xl cursor-pointer bg-[#EFF6FF] mt-2 border-[#3B82F6]'>
                                    <input type="file" className='hidden uploadBtn' />
                                    مشاهده
                                </form>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='mt-[47px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>فصل 1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="vuesax/bold/add-square">
                                            <g id="add-square">
                                                <path id="Vector" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#292D32" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='عنوان فصل' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>فصل 1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="vuesax/bold/add-square">
                                            <g id="add-square">
                                                <path id="Vector" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#292D32" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='عنوان فصل' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>زمان</p>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='47 دقیقه' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] text-center'>
                                <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                <Switch className='mt-5' onColor='#21005D' onChange={switchVisibility} checked={lessonVisible} />
                            </div>
                            <div className='mt-[47px] mr-[56px] text-center'>
                                <p className='font-bold text-lg'>اپلود درس</p>
                                <form action="" onClick={() => document.querySelector('.uploadBtn').click()} className='border-dashed border p-2 px-4 rounded-xl cursor-pointer bg-[#EFF6FF] mt-2 border-[#3B82F6]'>
                                    <input type="file" className='hidden uploadBtn' />
                                    مشاهده
                                </form>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='mt-[47px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>فصل 1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="vuesax/bold/add-square">
                                            <g id="add-square">
                                                <path id="Vector" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#292D32" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='عنوان فصل' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>فصل 1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="vuesax/bold/add-square">
                                            <g id="add-square">
                                                <path id="Vector" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#292D32" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='عنوان فصل' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] '>
                                <div className='flex w-[204px] justify-between'>
                                    <p className='font-bold'>زمان</p>
                                </div>
                                <div className='mt-2 w-[204px]'>
                                    <input type="text" className='border-0 rounded-lg h-[56px] w-full' placeholder='47 دقیقه' />
                                </div>
                            </div>
                            <div className='mt-[47px] mr-[56px] text-center'>
                                <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                <Switch className='mt-5' onColor='#21005D' onChange={switchVisibility} checked={lessonVisible} />
                            </div>
                            <div className='mt-[47px] mr-[56px] text-center'>
                                <p className='font-bold text-lg'>اپلود درس</p>

                                <form action="" onClick={() => document.querySelector('.uploadBtn').click()} className='border-dashed border p-2 px-4 rounded-xl cursor-pointer bg-[#EFF6FF] mt-2 border-[#3B82F6]'>
                                    <input type="file" className='hidden uploadBtn' />
                                    مشاهده
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-16 mb-10'>
                        <button onClick={() => { setShowCourseConfirmation(false) }} className='mx-2 w-[180px] h-[56px] border-2 rounded-xl text-lg border-[#C93636] text-[#C93636]'>رد درخواست</button>
                        <button onClick={() => { setShowCourseConfirmation(false) }} className='mx-2 w-[180px] h-[56px]  rounded-xl bg-[#393] text-lg  text-white'>انتشار</button>
                    </div>
                </div>
            )

            }
        </div>

    )
}
export default CourseStatus