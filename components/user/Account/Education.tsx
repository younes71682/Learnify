import Image from 'next/image'
import React from 'react'

const Education = () => {

    return (
        <div className='flex flex-col w-[72%] h-full pt-5 pr-4 pb-8 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/user/account/info_user/education.svg' alt='icon' width={24} height={24} />
                <h2>تحصیلات</h2>
            </div>
            <div className='flex flex-wrap gap-4 w-[90%]'>
                <input placeholder='نام موسسه/دانشگاه' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-3 outline-[#008000]' />
                <input placeholder='رشته تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-3 outline-[#008000]' />
                <input placeholder='مقطع تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-3 outline-[#008000]' />
            </div>
        </div>
    )
}

export default Education
