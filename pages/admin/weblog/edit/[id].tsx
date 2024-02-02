import Blog_Fetch from '@/components/api/admin/Blog_Fetch';
import Toggle_button_edit from '@/components/button/Toggle_button_edit'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const editblog = () => {

    const router = useRouter()
    const { id } = router.query
    const blogId = id

    const { data_show_BlogId, pending_show_BlogId } = Blog_Fetch(null,blogId)


    const data = data_show_BlogId?.data
    console.log('data', data)
    const title = data_show_BlogId?.data.blog?.title
    const description = data_show_BlogId?.data.blog?.description



    const handleback = () => {
        router.back()
    }

    const Toggle_button_edit = dynamic(() => import("@/components/button/Toggle_button_edit"), { ssr: false });


    return (

        <div className=' flex justify-center h-[180vh] mt-28'>
            <div className='flex flex-col justify-between py-8 gap-8  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[90%] h-[100vh] '>

                <div className='flex flex-col gap-8'>
                    <div className='pr-4'>
                        <p className='text-[#404040] font-bold'>ویرایش بلاگ</p>
                        <div className='flex items-center gap-4 mt-3 '>
                            <div className='rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.05) w-[134px] h-[114px]'><img src='/images/admin/editeblog/imag.png' alt='image' /></div>
                            <p className='text-sm'>{title}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <Toggle_button_edit {...title}/>

                        <div className='flex flex-col mx-6'>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end gap-2 ml-8'>
                    <div onClick={handleback} className='text-[#C93636] bg-white border-solid border-[1px] border-[#C93636] rounded-[10px] w-[8%] py-2 flex justify-center items-center cursor-pointer'>انصراف</div>
                    <div className='text-white bg-[#008000] rounded-[10px] w-[8%] py-2 flex justify-center items-center'>ویرایش</div>
                </div>

            </div>
        </div>
    )
}

export default editblog
