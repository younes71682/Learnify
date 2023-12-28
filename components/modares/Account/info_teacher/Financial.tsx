import Image from 'next/image'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const Financial = () => {

    const form = useFormContext()

    const { register } = form
    return (
        <div className='flex flex-col w-[28%] h-full pt-5 pr-4 pb-8 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/modares/account/financial.svg' alt='icon' width={24} height={24} />
                <h2>حساب مالی</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <input {...register("numbercard", { required: true })} placeholder='شماره کارت' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2 outline-[#008000]  ' />
                <input {...register("numberfinancial",)} placeholder='شماره حساب' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2 outline-[#008000]  ' />
            </div>
        </div>
    )
}

export default Financial
