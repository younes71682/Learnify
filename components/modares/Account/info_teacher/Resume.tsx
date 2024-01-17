 import Image from 'next/image'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const Resume = () => {

    const form = useFormContext()
const {register}=form

    return (
        <div className='flex flex-col w-[72%] h-full pt-5 pb-4 px-5 gap-3 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex  gap-1 text-lg'>
                <Image src='/icon/user/account/info_user/location.svg' alt='icon' width={24} height={24} />
                <p>توضیح رزومه</p>
            </div>
            <div className=' flex justify-center h-[80%]'>
                <textarea {...register("description")} className='w-full h-full rounded-[10px] border-solid border-[0.5px] border-[#AAA] resize-none focus:border-[#008000] focus:ring-[#008000]' />
            </div>
        </div>
    )
}

export default Resume
