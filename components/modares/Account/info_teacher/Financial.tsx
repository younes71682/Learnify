import { error } from 'console'
import Image from 'next/image'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const Financial = () => {

    const form = useFormContext()

    const { register, formState } = form
    const { errors } = formState

    return (
        <div className='flex flex-col w-[28%] h-full pt-6 pb-2 pr-4 gap-4 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/modares/account/financial.svg' alt='icon' width={24} height={24} />
                <h2>حساب مالی</h2>
            </div>
            <form className='flex flex-col gap-1  '>
                <div className='flex flex-col gap-1 h-[71px] '>
                    <input {...register("numbercard", { required: true })} placeholder='شماره کارت' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[84%] h-[48px] pr-2  outline-[#008000]  ' />
                    {errors.numbercard?.type === "required" && <p className="text-red-500 font-normal text-xs">شماره کارت خود را وارد کنید</p>}
                </div>
                <div className='flex flex-col gap-1 h-[71px]'>
                    <input {...register("numberfinancial",{required:true})} placeholder='شماره حساب' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[84%] h-[48px] pr-2  outline-[#008000]  ' />
                    {errors.numberfinancial?.type === "required" && <p className="text-red-500 font-normal text-xs">شماره حساب خود را وارد کنید</p>}
                </div>
            </form>
        </div>
    )
}

export default Financial
