import React from 'react'
import Layout_User from '@/components/user/layout_user/Layout_User'
import Sidebar from '@/components/modares/Account/Sidebar'

export const Comments = () => {
    return (

        <Layout_User showFooter={false}>
            <div className='flex justify-center  gap-6 h-[150px] pt-24 '>
                <Sidebar />
                <div className='flex flex-col border border-red-500 gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[65%] h-[60vh] overflow-y-auto'>
                    <div className='flex  justify-between border border-red-500 px-8 py-5'>
                        <select name="" id="">
                            <option value="">option 1</option>
                            <option value="">option 2</option>
                            <option value="">option 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </Layout_User >
    )

}
export default Comments