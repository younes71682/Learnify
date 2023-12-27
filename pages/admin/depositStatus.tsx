import React from 'react'
import Sidebar from '@/components/admin/Sidebar'


export const DepositStatus = () => {
    return (



        <div className='flex gap-6 justify-center h-[140vh] pt-20'>
            <Sidebar />
            <div className=' p-4  shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[10px] w-[64%] h-[100vh] overflow-y-auto'>
                
                <div className=' flex justify-around'>
                    <div className=' w-fit'>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px]  h-[70px]  justify-around '>
                            <div>#</div>
                            <div>تاریخ درخواست</div>
                            <div className='w-[63px] h-[32px]   rounded-md flex items-center justify-center'>اقدام</div>
                        </div>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px] bg-[#E6F2E6] h-[70px] border justify-around '>
                            <div>#151629</div>
                            <div>12 Dec, 2020</div>
                            <button className='w-[63px] h-[32px] bg-[#393] text-white rounded-md'>واریز</button>
                        </div>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px] bg-[#E6F2E6] h-[70px] border justify-around mt-6'>
                            <div>#151629</div>
                            <div>12 Dec, 2020</div>
                            <button className='w-[63px] h-[32px] bg-[#393] text-white rounded-md'>واریز</button>
                        </div>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px] bg-[#E6F2E6] h-[70px] border justify-around mt-6'>
                            <div>#151629</div>
                            <div>12 Dec, 2020</div>
                            <button className='w-[63px] h-[32px] bg-[#393] text-white rounded-md'>واریز</button>
                        </div>
                    </div>
                    <div className=' w-fit'>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px]  h-[70px]  justify-around '>
                            <div>#</div>
                            <div>تاریخ درخواست</div>
                            <div className='w-[63px] h-[32px]   rounded-md flex items-center justify-center'>اقدام</div>
                        </div>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px] bg-[#E6F2E6] h-[70px] border justify-around '>
                            <div>#151629</div>
                            <div>12 Dec, 2020</div>
                            <button className='w-[63px] h-[32px] bg-[#393] text-white rounded-md'>واریز</button>
                        </div>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px] bg-[#E6F2E6] h-[70px] border justify-around mt-6'>
                            <div>#151629</div>
                            <div>12 Dec, 2020</div>
                            <button className='w-[63px] h-[32px] bg-[#393] text-white rounded-md'>واریز</button>
                        </div>
                        <div className='flex items-center flex-wrap w-[397px] rounded-[10px] bg-[#E6F2E6] h-[70px] border justify-around mt-6'>
                            <div>#151629</div>
                            <div>12 Dec, 2020</div>
                            <button className='w-[63px] h-[32px] bg-[#393] text-white rounded-md'>واریز</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DepositStatus