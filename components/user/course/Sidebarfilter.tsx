import React from 'react'

const Sidebarfilter = () => {
    return (
        <div className='flex flex-col justify-between flex-1 mt-3 '>


            {/* نوع دوره */}
            <div className='bg-white shadow-[0_0px_20px_rgb(0,0,0,0.05)] w-full  py-[20px] px-[16px]  rounded-[10px]'>
                <p className='text-16 font-bold leading-16 tracking-tight text-right text-[#484848]'>نوع دوره </p>
                <div className='mb-[14px] justify-between mt-[24px] border flex items-center'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="radio" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>رایگان</p>
                    </div>
                    <p className='text-[#858585]'>17</p>
                </div>
                <div className='flex justify-between mb-[23px] border'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="radio" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>پولی</p>
                    </div>
                    <p className='text-[#858585]'>87</p>
                </div>
            </div>

            {/* مرتب سازی براساس */}
            <div className='bg-white shadow-[0_0px_20px_rgb(0,0,0,0.05)] w-full py-[20px] px-[16px]  rounded-[10px]'>
                <p className='text-16 font-bold leading-16 tracking-tight text-right text-[#484848]'>مرتب سازی براساس</p>
                <div className='mb-[14px] justify-between mt-[24px] border flex'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>جدیدترین</p>
                    </div>
                </div>
                <div className='flex justify-between mb-[23px] border'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>قدیمی ترین</p>
                    </div>
                </div>
            </div>

            {/* دسته دوره */}
            <div className='bg-white shadow-[0_0px_20px_rgb(0,0,0,0.05)] w-full py-[20px] px-[16px]  rounded-[10px]'>
                <p className='text-16 font-bold leading-16 tracking-tight text-right text-[#484848]'>دسته دوره</p>
                <div className='mb-[14px] mt-[23px] justify-between border flex'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>رایگان</p>
                    </div>
                    <p className='text-[#858585]'>17</p>
                </div>
                <div className='mb-[14px] justify-between border flex'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>لاراول</p>
                    </div>
                    <p className='text-[#858585]'>17</p>
                </div>
                <div className='mb-[14px] justify-between border flex'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>کاربردی</p>
                    </div>
                    <p className='text-[#858585]'>17</p>
                </div>
                <div className='mb-[14px] justify-between border flex'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>php</p>
                    </div>
                    <p className='text-[#858585]'>17</p>
                </div>
                <div className='mb-[14px] justify-between border flex'>
                    <div className='flex'>
                        <input className='bg-[#E7E7E7] rounded-[5px] w-[22px] h-[22px] checked:bg-green-500 focus:border-none appearance-none' type="checkbox" name='free1' />
                        <p className='mx-[7px] text-[#4F4F4F] font-medium'>جاوا</p>
                    </div>
                    <p className='text-[#858585]'>17</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebarfilter
