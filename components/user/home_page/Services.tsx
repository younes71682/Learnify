import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (

        <div className='flex justify-center items-center mt-20'>
            <div className='flex justify-between w-[85%] px-[5%]'>
                <div className='flex items-center  gap-2'><img src="/icon/user/home_page/Services/book.svg" alt='Book' /><div className='text-[#484848] text-xl font-bold flex items-center tracking-wider'><p>بیش از</p><p className='text-[#339933] text-2xl font-normal font-Byekan pb-2'>80</p><p>دوره آموزشی</p></div></div>
                <div className='flex items-center  gap-2'><img src="/icon/user/home_page/Services/call.svg" alt='Call' /><div className='text-[#484848] text-xl font-bold flex items-center tracking-wider'><p>پشتیبانی</p><p className='text-[#339933] text-2xl font-normal font-Byekan pb-2'>24</p><p>ساعت</p></div></div>
                <div className='flex items-center  gap-2'><img src="/icon/user/home_page/Services/card.svg" alt='Card' /><div className='text-[#484848] text-xl font-bold flex items-center tracking-wider'><p>ضمانت</p><p className='text-[#339933] text-2xl font-normal '>بازگشت</p><p>وجه</p></div></div>
                <div className='flex items-center  gap-2'><img src="/icon/user/home_page/Services/edit.svg" alt='Edit' /><div className='text-[#484848] text-xl font-bold flex items-center tracking-wider'><p>یادگیری با</p><p className='text-[#339933] text-2xl font-normal '>تمرین</p><p>وآزمون</p></div></div>
            </div>

        </div>
    )
}

export default Services

