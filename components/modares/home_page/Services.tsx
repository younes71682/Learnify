import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex justify-center mt-28'>
            <div className='flex items-center justify-between w-[470px] mx-8 [@media(max-width:370px)]:flex-col [@media(max-width:370px)]:gap-4'>
                <div className='flex flex-col items-center w-[136px] text-center gap-5 [@media(max-width:370px)]:gap-0'>
                    <Image src="/icon/modares/home_page/discount.svg" alt='discount' width={64} height={64} className='max-sm:w-[44px] max-sm:h-[44px]' />
                    <p className='text-lg font-semibold font-Byekan max-sm:text-sm'>دریافت بالاترین سهم فروش تا 50 %</p>
                </div>
                <div className='flex flex-col items-center w-[105px] text-center gap-5 [@media(max-width:370px)]:gap-0'>
                    <Image src="/icon/modares/home_page/card.svg" alt='discount' width={64} height={64} className='max-sm:w-[44px] max-sm:h-[44px]' />
                    <p className='text-lg font-semibold max-sm:text-sm'>پرداخت سریع به حساب مدرس</p>
                </div>
                <div className='flex flex-col items-center w-[90px] text-center gap-5 [@media(max-width:370px)]:gap-0'>
                    <Image src="/icon/modares/home_page/panel_user.svg" alt='discount' width={64} height={64} className='max-sm:w-[44px] max-sm:h-[44px]' />
                    <p className='text-lg font-semibold max-sm:text-sm'>پنل کاربری با امکانات کامل</p>
                </div>
            </div>
        </div>
    )
}

export default Services
