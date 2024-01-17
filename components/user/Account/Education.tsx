import Image from 'next/image'
import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'



const Education = () => {

    const form = useFormContext()

    const { register } = form


    return (
        <div className='flex flex-col w-[72%] h-full py-5 pr-4 gap-4 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/user/account/info_user/education.svg' alt='icon' width={24} height={24} />
                <h2>تحصیلات</h2>
            </div>
            <form className='flex flex-wrap gap-6  w-[95%] '>
                <input {...register("university",)} placeholder='نام موسسه/دانشگاه' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2  outline-[#008000]' />
                <input {...register("field_of_study",)} placeholder='رشته تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2  outline-[#008000]' />
                <input {...register("educational_stage",)} placeholder='مقطع تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2  outline-[#008000]' />
            </form>
        </div>
    )
}

export default Education
