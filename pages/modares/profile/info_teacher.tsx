import Button_info_operation from '@/components/button/Button_info_operation'
import Financial from '@/components/modares/Account/Financial'
import Resume from '@/components/modares/Account/Resume'
import Sidebar from '@/components/modares/Account/Sidebar'
import Education from '@/components/user/Account/Education'
import Location from '@/components/user/Account/Location'
import Layout_User from '@/components/user/layout_user/Layout_User'
import Select_gender from '@/components/user/select/Select_gender'
import Image from 'next/image'
import React from 'react'

const info_teacher = () => {
    return (
        <Layout_User showFooter>
            <div className='flex justify-center gap-6 h-[150vh] pt-28'>
                <Sidebar />
                <div className='flex flex-col gap-6 w-[64%] h-[112vh]'>

                    <div className='flex items-center'>
                        <div className='flex flex-col items-start gap-6 pr-4 pt-5 pb-10 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '>
                            <div className='flex items-center gap-1 text-lg'>
                                <Image src='/icon/user/account/info_user/user.svg' alt='icon' width={24} height={24} />
                                <h2>اطلاعات کاربری</h2>
                            </div>
                            <form className='flex flex-wrap gap-4 w-[90%]' noValidate>
                                <div className='flex flex-col'>
                                    <input placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px]  outline-[#008000] placeholder:pr-2 ' required />
                                    <p className='text-red-500 font-normal text-xs'></p>
                                </div>
                                <div className='flex flex-col'>
                                    <input placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required />
                                    <p className='text-red-500 font-normal text-xs'></p>
                                </div>
                                <Select_gender />
                                <div className='flex flex-col'>
                                    <input placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' required />
                                    <p className='text-red-500 font-normal text-xs'></p>
                                </div>
                                {/* <DevTool control={control} /> */}
                            </form>
                        </div>
                        
                    </div>

                    <div className='flex items-center gap-6'>
                        <Location />
                        <Education />
                    </div>

                    <div className='flex items-center gap-6 h-[224px]'>
                        <Financial />
                        <Resume />
                    </div>

                    <Button_info_operation />

                </div>
            </div>
        </Layout_User>
    )
}

export default info_teacher
