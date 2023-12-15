 import Header from '@/components/user/about/Header'
import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div>

            <Header />


            <div className='flex flex-col items-center mb-[177px] gap-[55px]'>
                <div>
                    <h2 className='text-[#87B9D5] text-5xl font-YekanBakhFat'>چرا لرنیفای؟</h2>
                    <div className='flex'>
                        <Image src='/icon/about/line.svg' alt='Line' width={70} height={2} />
                        <Image src='/icon/about/point.svg' alt='Point' width={6} height={6} className='mx-1' />
                        <Image src='/icon/about/line.svg' alt='Line' width={70} height={2} />
                    </div>
                </div>
                <div className='flex gap-[104px]'>
                    <div className='flex items-center'>
                        <div className='bg-[#36FF15] rounded-[10px] opacity-[0.2] rotate-45 w-[66.581px] h-[66.581px]' />
                        <p className=' text-[#38872A] text-2xl font-YekanBakhFat relative left-6'>پشتیبانی و کمک آنلاین</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-[#C240FF] rounded-[10px] opacity-[0.2]  rotate-45 w-[66.581px] h-[66.581px]' />
                        <p className=' text-[#670E8F] text-2xl font-YekanBakhFat relative left-6'>تجربه یادگیری تعاملی و  مبتنی بر تمرین</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-[#69EEFF] rounded-[10px] opacity-[0.2] rotate-45 w-[66.581px] h-[66.581px]' />
                        <p className=' text-[#178490] text-2xl font-YekanBakhFat relative left-6 '>انعطاف‌پذیری  یادگیری</p>
                    </div>
                </div>
            </div>









            <div className='flex flex-col items-center gap-12 mb-[177px] '>
                <div className='flex'>
                    <div className='flex '>
                        <div className='bg-[#E76788] rounded-full opacity-[0.2] w-[21px] h-[21px]' />
                        <div className='bg-[#E76788] rounded-full opacity-[0.2] w-[28px] h-[28px] translate-x-4 translate-y-2' />
                    </div>
                    <p className='text-[#E76788] text-5xl font-YekanBakhFat relative left-7'>با ما در ارتباط باشید</p>
                </div>
                <div className='flex gap-[86.67px]'>
                    <Image
                        src="/icon/about/instagram.svg"
                        alt='Instagram'
                        width={52}
                        height={52}
                    />
                    <Image
                        src="/icon/about/twitter.svg"
                        alt='Twitter'
                        width={52}
                        height={52}
                    />
                    <Image
                        src="/icon/about/linkedin.svg"
                        alt='Linkedin'
                        width={52}
                        height={52}
                    />
                </div>
            </div>



        </div>
    )
}

export default index
