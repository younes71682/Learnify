import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (

        <div className='flex justify-center items-center mt-20 '>
            <div className='flex justify-between w-[80%]'>
                <div className='flex items-center gap-2'><img src="/icon/user/home_page/Services/book.svg" alt='Book' /><h4 className='text-[#484848] text-xl font-bold'>بیش از <span className='text-[#339933] text-2xl font-normal'>80</span>دوره آموزشی</h4></div>
                <div className='flex items-center gap-2'><img src="/icon/user/home_page/Services/call.svg" alt='Call' /><h4 className='text-[#484848] text-xl font-bold'>پشتیبانی<span className='text-[#339933] text-2xl font-normal'>24</span>ساعته</h4></div>
                <div className='flex items-center gap-2'><img src="/icon/user/home_page/Services/card.svg" alt='Card' /><h4 className='text-[#484848] text-xl font-bold'>ضمانت<span className='text-[#339933] text-2xl font-normal'>بازگشت</span>وجه</h4></div>
                <div className='flex items-center gap-2'><img src="/icon/user/home_page/Services/edit.svg" alt='Edit' /><h4 className='text-[#484848] text-xl font-bold'>یادگیری با<span className='text-[#339933] text-2xl font-normal'>تمرین</span>و آزمون</h4></div>
            </div>

        </div>
    )
}

export default Services

