import React, { useState } from 'react'
import { DevTool } from "@hookform/devTools"
import { useForm } from 'react-hook-form';
import Select_gender from '@/components/Select_gender';

import Education from './Education';
import Location from './Location';
import Favorites from './Favorites';



type FormeValue = {
    username: string
    phoneNumber: string
    email: string
    gender: string
    datebirth: string
}
const Info_user = () => {


    const form = useForm<FormeValue>({
        defaultValues: {
            username: "یونس",
            phoneNumber: "0993666",
            email: ""
        }
    })

    const { register, control, handleSubmit, formState } = form

    const { errors } = formState


    const submit = (data: FormeValue) => {
        console.log(data)
    }

    return (
        <div className='flex flex-col gap-6 w-full'>

            <div className='flex flex-col items-start gap-6 pr-4 pt-5 pb-12 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
                <div className='flex items-center gap-1 text-lg'>
                    <img src='/icon/user/account/info_user/user.svg' />
                    <h2>اطلاعات کاربری</h2>
                </div>
                <form className='flex flex-wrap gap-4 w-[90%]' onSubmit={handleSubmit(submit)} noValidate>
                    <div className='flex flex-col'>
                        <input {...register("username", { required: { value: true, message: "نام خود را وارد کنید" } })} placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px]  outline-[#008000] placeholder:pr-2 ' required />
                        <p className='text-red-500 font-normal text-xs'>{errors.username?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <input {...register("phoneNumber", { required: { value: true, message: "شماره تلفن خود را وارد کنید " }, validate: (fieldValue) => { return (fieldValue === `$[0-9]` || "شماره تلفن معتبر نیست") } })} placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required />
                        <p className='text-red-500 font-normal text-xs'>{errors.phoneNumber?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <input  {...register("email", { pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "ایمیل نامعتبر", }, validate: { notAdmin: (fieldValue) => { return (fieldValue !== "admin@example.com" || "یک ایمیل دیکر وارد کنیید") }, notBlackListed: (fieldValue) => { return (!fieldValue.endsWith("baddomain.com") || "This domin ids not supoort") } } })} placeholder='*ایمیل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[0_10px_10px_0] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required />
                            <button className='text-[#393] border-solid  border-[0.5px] border-[#393] rounded-[10px_0_0_10px] px-2' >تایید ایمیل</button>
                        </div>
                        <p className='text-red-500 font-normal text-xs'>{errors.email?.message}</p>
                    </div>
                    <Select_gender />
                    <input {...register("datebirth")} placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' required />
                    <button>onsubmit</button>
                    <DevTool control={control} />
                </form>
            </div>



            {/* <Test/> */}
            <div className='flex gap-6'>
                <Location />
                <Education />
            </div>

            <Favorites />

            <div className='flex justify-end gap-2'>
                <div className='text-[#C93636] bg-white border-solid border-[1px] border-[#C93636] rounded-[10px] w-[14%] py-2 flex justify-center items-center'>انصراف</div>
                <div className='text-white bg-[#008000] rounded-[10px] w-[14%] py-2 flex justify-center items-center'>اعمال تغییرات</div>
            </div>

        </div>
    )
}

export default Info_user
