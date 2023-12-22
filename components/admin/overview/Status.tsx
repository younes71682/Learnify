import Image from 'next/image'
import React from 'react'

const Status = () => {

    const status = [
        { id: 1, title: "تعداد دانشجو", number: "1,156", icon: "" },
        { id: 2, title: "تعداد دوره های فعال", number: "354", icon: "" },
        { id: 3, title: "میزان درامد", number: "2,048,120", icon: "" },
        { id: 4, title: "تعداد دوره های در انتظار", number: "5", icon: "" },
    ]

    return (
        <div className='flex justify-between h-[25vh]'>

            <div className='flex flex-col justify-center items-center gap-3 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[23%]'>
                <div className='bg-[rgba(199,255,248,0.43)] rounded-full flex justify-center items-center p-2'>
                    <Image src="/icon/admin/overwiew/user.svg" alt='' width={24} height={24} />
                </div>
                <h3 className='text-[#404040]'>تعداد دانشجو</h3>
                <div className='flex flex-col items-center'>
                    <p className='text-[#212121] text-xl font-normal'>1,156</p>
                    <p className='text-[#A0A0A0] text-sm font-normal'>نفر</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-3 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[23%]'>
                <div className='bg-[rgba(203,255,199,0.43)] rounded-full flex justify-center items-center p-2'>
                    <Image src="/icon/admin/overwiew/education.svg" alt='' width={24} height={24} />
                </div>
                <h3 className='text-[#404040]'>تعداد دوره های فعال</h3>
                <div className='flex flex-col items-center'>
                    <p className='text-[#212121] text-xl font-normal'>354</p>
                    <p className='text-[#A0A0A0] text-sm font-normal'>دوره</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-3 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[23%]'>
                <div className='bg-[rgba(255,253,199,0.43)] rounded-full flex justify-center items-center p-2'>
                    <Image src="/icon/admin/overwiew/Income.svg" alt='' width={24} height={24} />
                </div>
                <h3 className='text-[#404040]'>میزان درامد</h3>
                <div className='flex flex-col items-center'>
                    <p className='text-[#212121] text-xl font-normal'>2,048,120</p>
                    <p className='text-[#A0A0A0] text-sm font-normal'>تومان</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-3 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[23%]'>
                <div className='bg-[rgba(255,199,199,0.43)] rounded-full flex justify-center items-center p-2'>
                    <Image src="/icon/admin/overwiew/waiting.svg" alt='' width={24} height={24} />
                </div>
                <h3 className='text-[#404040]'>تعداد دوره های در انتظار</h3>
                <div className='flex flex-col items-center'>
                    <p className='text-[#212121] text-xl font-normal'>5</p>
                    <p className='text-[#A0A0A0] text-sm font-normal'>دوره</p>
                </div>
            </div>
        </div>
    )
}

export default Status
