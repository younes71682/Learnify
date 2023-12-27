import React from 'react'
import Sidebar from '@/components/admin/Sidebar'

export const Support = () => {

    const data = [
        { id: 1, title: 'آموزش کاربردی اتوکد', mentor: 'سلمان طاهری', comment: 'واقعا بد بودن به کمک تدریس بد نتونستم به خوبی پاس کنم' },
        { id: 1, title: 'آموزش کاربردی اتوکد', mentor: 'سلمان طاهری', comment: 'واقعا بد بودن به کمک تدریس بد نتونستم به خوبی پاس کنم' },
    ]

    return (



        <div className='flex gap-6 justify-center h-[140vh] pt-20'>
            <Sidebar />
            <div className=' p-4 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[10px] w-[64%] h-[100vh] overflow-y-auto'>
                <div className='flex'>
                    <p className='font-medium text-lg text-[#000] mr-2'>لیست گزاریش کاربران</p>
                </div>
                <div className='flex flex-wrap justify-around mt-6'>
                    {data.map((item) => {
                        return (
                            <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.05)] p-4 w-[395px] rounded-[10px]'>
                                <p>{item.title}</p>
                                <div className='flex text-[#008000] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className='font-normal text-sm'>{item.mentor}</p>
                                </div>
                                <p className='mt-6'>{item.comment}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
export default Support