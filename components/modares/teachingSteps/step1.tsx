import React from 'react'


export const Step1 = () => {



    return (
        <div className='flex justify-center'>
            <form action='' className='border-[2px] mx-[20px] h-[213px] bg-[#EFF6FF] w-[262px] flex justify-center items-center border-dashed rounded-lg border-[#3B82F6]' onClick={() => document.querySelector('.uploadImage').click()}>
                <input type="file" className='uploadImage hidden' />
                <div className='flex flex-col items-center'>
                    <div>
                        <img src="/images/modares/teching_steps/Image.png" alt="" />
                    </div>
                    <div className='flex mt-2'>
                        <p className='text-[#3B82F6] text-base font-bold mx-1'>browse</p>
                        <p className='text-base'>بارگذاری تیزر دوره</p>
                    </div>
                    <p className='text-[#9CA3AF] mt-2'>Maximum size: 50MB</p>
                </div>
            </form>
            <form action='' className='border-[2px] mx-[20px] h-[213px] bg-[#EFF6FF] w-[262px] flex justify-center items-center border-dashed rounded-lg border-[#3B82F6]' onClick={() => document.querySelector('.uploadImage').click()}>
                <input type="file" className='uploadImage hidden' />
                <div className='flex flex-col items-center'>
                    <div>
                        <img src="/images/modares/teching_steps/Image.png" alt="" />
                    </div>
                    <div className='flex mt-2'>
                        <p className='text-[#3B82F6] text-base font-bold mx-1'>browse</p>
                        <p className='text-base'>بارگذاری عکس دوره</p>
                    </div>
                    <p className='text-[#9CA3AF] mt-2'>Maximum size: 50MB</p>
                </div>
            </form>
        </div>
    )
}

export default Step1