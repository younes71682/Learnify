import React, { useState } from 'react'
import Layout_User from '@/components/user/layout_user/Layout_User'
import Sidebar from '@/components/modares/Account/Sidebar'
import { CommentComponent } from '@/components/modares/commentsComponents/commentComponent'



export const Comments = () => {

    const [value, setValue] = useState('')

    const options = [
        'اموزش لاراول', 'اموزش Node.js','اموزش Vue3'
    ];

    console.log(value)

    return (

        <Layout_User showFooter={false}>
            <div className='flex justify-center  gap-6 h-[150px] pt-24 '>
                <Sidebar />
                <div className='flex flex-col  gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[65%] h-[100vh] '>
                    <div className='flex  justify-between  px-8 py-5'>
                        <select className='rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-4 px-8 border-0 ' value={value} onChange={(e) => setValue(e.target.value)} id="">
                            <option hidden value="">دوره مورد نظر خود را انتخاب کنید</option>
                            {options.map((item) => {
                                return (
                                    <option >{item}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className=' w-[90%] mx-auto'>
                        {value === 'اموزش لاراول' ? (<CommentComponent />) : null}
                    </div>
                </div>
            </div>
        </Layout_User >
    )
}
export default Comments