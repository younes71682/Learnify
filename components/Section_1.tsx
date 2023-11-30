import Image from 'next/image'
import React from 'react'

const Section_1 = () => {
    return (

        <div className='flex justify-between items-center mx-40 mt-20 text-[#484848] text-xl font-bold'>

            <div className='flex items-center gap-2'><Image src="/icon/home_page/1/book.svg" alt='Book' width={48} height={48} /><h4 className='flex gap-1'>بیش از <span className='text-[#339933] text-2xl font-normal'>80</span>دوره آموزشی</h4></div>
            <div className='flex items-center gap-2'><Image src="/icon/home_page/1/call.svg" alt='Call' width={48} height={48} /><h4 className='flex gap-1'>پشتیبانی<span className='text-[#339933] text-2xl font-normal'>24</span>ساعته</h4></div>
            <div className='flex items-center gap-2'><Image src="/icon/home_page/1/card.svg" alt='Card' width={48} height={48} /><h4 className='flex gap-1'>ضمانت<span className='text-[#339933] text-2xl font-normal'>بازگشت</span>وجه</h4></div>
            <div className='flex items-center gap-2'><Image src="/icon/home_page/1/edit.svg" alt='Edit' width={48} height={48} /><h4 className='flex gap-1'>یادگیری با<span className='text-[#339933] text-2xl font-normal'>تمرین</span>و آزمون</h4></div>

        </div>
    )
}

export default Section_1

