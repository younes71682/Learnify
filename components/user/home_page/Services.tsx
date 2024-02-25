import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex justify-center pt-10'>
            <div className='flex justify-between [@media(max-width:613px)]:justify-center [@media(max-width:613px)]:gap-4 flex-wrap w-[80%]'>
                <div className='flex w-[245px] [@media(max-width:500px)]:w-[180px] items-center'><Image src="/icon/user/home_page/Services/book.svg" alt='Book' width={48} height={48} className='max-lg:w-[32px] max-lg:h-[32px] [@media(max-width:500px)]:w-[24px] [@media(max-width:500px)]:h-[24px]' /><div className='text-[#484848] text-xl max-lg:text-lg [@media(max-width:500px)]:text-sm font-bold flex items-center tracking-wider'><p>بیش از</p><p className='text-[#339933] text-2xl max-lg:text-xl [@media(max-width:500px)]:text-lg font-normal font-Byekan '>80</p><p>دوره آموزشی</p></div></div>
                <div className='flex w-[245px] [@media(max-width:500px)]:w-[180px] items-center'><Image src="/icon/user/home_page/Services/call.svg" alt='Call' width={48} height={48} className='max-lg:w-[32px] max-lg:h-[32px] [@media(max-width:500px)]:w-[24px] [@media(max-width:500px)]:h-[24px]' /><div className='text-[#484848] text-xl max-lg:text-lg [@media(max-width:500px)]:text-sm font-bold flex items-center tracking-wider'><p>پشتیبانی</p><p className='text-[#339933] text-2xl max-lg:text-xl [@media(max-width:500px)]:text-lg font-normal font-Byekan '>24</p><p>ساعت</p></div></div>
                <div className='flex w-[245px] [@media(max-width:500px)]:w-[180px] items-cente'><Image src="/icon/user/home_page/Services/card.svg" alt='Card' width={48} height={48} className='max-lg:w-[32px] max-lg:h-[32px] [@media(max-width:500px)]:w-[24px] [@media(max-width:500px)]:h-[24px]' /><div className='text-[#484848] text-xl max-lg:text-lg [@media(max-width:500px)]:text-sm font-bold flex items-center tracking-wider'><p>ضمانت</p><p className='text-[#339933] text-2xl max-lg:text-xl [@media(max-width:500px)]:text-lg font-normal'>بازگشت</p><p>وجه</p></div></div>
                <div className='flex w-[245px] [@media(max-width:500px)]:w-[180px] items-center'><Image src="/icon/user/home_page/Services/edit.svg" alt='Edit' width={48} height={48} className='max-lg:w-[32px] max-lg:h-[32px] [@media(max-width:500px)]:w-[24px] [@media(max-width:500px)]:h-[24px]' /><div className='text-[#484848] text-xl max-lg:text-lg [@media(max-width:500px)]:text-sm font-bold flex items-center tracking-wider'><p>یادگیری با</p><p className='text-[#339933] text-2xl max-lg:text-xl [@media(max-width:500px)]:text-lg font-normal '>تمرین</p><p>وآزمون</p></div></div>
            </div>
        </div>
    )
}

export default Services

