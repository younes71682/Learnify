import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex justify-center mt-16'>
            <div className='flex items-center justify-between  w-[32%]'>
                <div className='flex flex-col items-center w-[27%] gap-5'>
                    <Image src="/icon/modares/home_page/discount.svg" alt='discount' width={64} height={64} />
                    <p className='text-lg font-semibold'>دریافت بالاترین سهم فروش تا 50 %</p>
                </div>
                <div className='flex flex-col items-center w-[22%] gap-5'>
                    <Image src="/icon/modares/home_page/card.svg" alt='discount' width={64} height={64} />
                    <p className='text-lg font-semibold '>پرداخت سریع به حساب مدرس</p>
                </div>
                <div className='flex flex-col items-center w-[19%] gap-5'>
                    <Image src="/icon/modares/home_page/panel_user.svg" alt='discount' width={64} height={64} />
                    <p className='text-lg font-semibold '>پنل کاربری با امکانات کامل</p>
                </div>
            </div>
        </div>
    )
}

export default Services
