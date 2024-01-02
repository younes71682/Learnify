import React from 'react'
import Link from 'next/link'
import Layout_admin from '@/components/layout/layout_admin/Layout_admin'


export const Weblog = () => {
    return (

        <Layout_admin>

            <div className=' p-4  rounded-[10px] w-[64%] h-[100vh] overflow-y-auto'>
                <div className='flex justify-between'>
                    <p className='font-medium text-base text-[#000] mr-2'>افزودن بلاگ</p>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12H18" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 18V6" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='font-medium text-lg text-[#008000] ml-10 mr-2'>افزودن </p>
                    </div>
                </div>
                <div className='flex flex-wrap  justify-around mt-6'>
                    <input type="text" placeholder='عنوان بلاگ' className='border-0 h-[51px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-full rounded-[10px]' />
                </div>
                <div className='justify-between  flex'>
                    <input type="text" placeholder='توضیحات' className='border-0 h-[128px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[75%] rounded-[10px] mt-5' />
                    <input type="" placeholder='افزودن عکس' className='border-0 h-[128px] items-center pr-12 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[20%] rounded-[10px] mt-5' />
                </div>
                <p className='font-medium text-base text-[#000] mt-5 mr-2'>ویرایش بلاگ</p>
                <div className='flex justify-betweennpm'>
                    <div className='w-[400px] flex p-3 rounded-[10px] mt-5 shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>
                        <img src="/images/user/courses/iconS.png" alt="" />
                        <div className='w-full' >
                            <p className='mr-4 mt-3 '>نقشه سایت یا سایت مپ چیست؟</p>
                            <div className='flex  justify-end mt-8  items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g id="vuesax/linear/trash">
                                        <g id="trash">
                                            <path id="Vector" d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_2" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_3" d="M18.8504 9.13965L18.2004 19.2096C18.0904 20.7796 18.0004 21.9996 15.2104 21.9996H8.79039C6.00039 21.9996 5.91039 20.7796 5.80039 19.2096L5.15039 9.13965" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_4" d="M10.3301 16.5H13.6601" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_5" d="M9.5 12.5H14.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                                <Link href="/admin/editblog" className='flex justify-center items-center border rounded-md border-[#008000] w-[30%] h-8'><p className='text-[#008000]'>ویرایش</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] flex p-3 rounded-[10px] mt-5 shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>
                        <img src="/images/user/courses/iconS.png" alt="" />
                        <div className='w-full' >
                            <p className='mr-4 mt-3 '>نقشه سایت یا سایت مپ چیست؟</p>
                            <div className='flex  justify-end mt-8  items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g id="vuesax/linear/trash">
                                        <g id="trash">
                                            <path id="Vector" d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_2" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_3" d="M18.8504 9.13965L18.2004 19.2096C18.0904 20.7796 18.0004 21.9996 15.2104 21.9996H8.79039C6.00039 21.9996 5.91039 20.7796 5.80039 19.2096L5.15039 9.13965" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_4" d="M10.3301 16.5H13.6601" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_5" d="M9.5 12.5H14.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                                <Link href="/admin/editblog" className='flex justify-center items-center border rounded-md border-[#008000] w-[30%] h-8'><p className='text-[#008000]'>ویرایش</p></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Layout_admin>

    )
}
export default Weblog
