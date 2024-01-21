import React from 'react'

import { FormProvider, useForm } from 'react-hook-form';

import Education from '@/components/user/Account/Education';
import Favorites from '@/components/user/Account/Favorites';
import Location from '@/components/user/Account/Location';
import Button_info_operation from '@/components/button/Button_info_operation';
import Image from 'next/image';
import Layout_profil_user from '@/components/layout/Layout_profil_user';
import Select_gender from '@/components/select/Select_gender';
import Birthday from '@/components/user/date/Birthday';


type FormeValue = {
  name: string
  family: string,
  phone_number: string
  email: string
  gender: string
  datebirth: string
  state: string,
  city: string,
  university: string,
  field_of_study: string,
  educational_stage: string,
}

const index = () => {


  const methods = useForm<FormeValue>({
    defaultValues: {
      name: "",
      family: "",
      phone_number: "",
      email: "",
      datebirth: "",
      // state: "",
      // city: "",
      university: "",
      field_of_study: "",
      educational_stage: "",
    }
  })

  const { register, control, handleSubmit, formState } = methods

  const { errors } = formState


  const onSubmit = (data: FormeValue) => {
    console.log(data)
  }




  return (

    <Layout_profil_user>


      <div className='flex flex-col gap-6 w-[64%] h-[112vh]'>
        <FormProvider {...methods}>
          <div className='flex flex-col items-start gap-6 pr-4 pt-5  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '>
            <div className='flex items-center gap-1 text-lg'>
              <Image src='/icon/user/account/info_user/user.svg' alt='icon' width={24} height={24} />
              <h2>اطلاعات کاربری</h2>
            </div>

            <form className='flex flex-wrap w-[90%] ' onSubmit={handleSubmit(onSubmit)} noValidate>

              <div className='flex flex-col gap-1 h-[71px] ml-4'>
                <input {...register("name", { required: true })} placeholder='*نام' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 outline-[#008000]  ' required />
                {errors.name?.type === "required" && <p className='text-red-500 font-normal text-xs'>نام خود را وارد کنید</p>}
              </div>

              <div className='flex flex-col gap-1 h-[71px] ml-4'>
                <input {...register("family", { required: true })} placeholder='*نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 outline-[#008000]  ' required />
                {errors.family?.type === "required" && <p className='text-red-500 font-normal text-xs'>نام خانوادگی خود را وارد کنید</p>}
              </div>

              <div className='flex flex-col gap-1 h-[71px] ml-4'>
                <input type='tel' {...register("phone_number", { required: true, maxLength: 11, pattern: /((0?9)|(\+?989))\d{9}/g })} placeholder='شماره موبایل*' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 focus:ring-[#008000] focus:border-[#008000] placeholder:text-right ' />
                {errors.phone_number?.type === "required" && <p className='text-red-500 font-normal text-xs'>شماره تلفن خود را وارد کنید</p>}
                {errors.phone_number?.type === "maxLength" && <p className='text-red-500 font-normal text-xs font-Byekan'>شماره تلفن نمیتواند بیشتر از 11 رقم باشد</p>}
                {errors.phone_number?.type === "pattern" && <p className='text-red-500 font-normal text-xs '>شماره تلفن نامعتبر</p>}
              </div>

              <Select_gender />

              <Birthday />

              <div className='flex flex-col gap-1 h-[71px] ml-4'>
                <div className='flex'>
                  <input type='email' {...register("email", { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, required: true, validate: { notAdmin: (fieldValue) => { return (fieldValue !== "admin@example.com" || "ایمیل دیگری وارد کنید") }, notBlackListed: (fieldValue) => { return (!fieldValue.endsWith("baddomain.com") || "This domin ids not supoort") } } })} placeholder='*ایمیل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[0_10px_10px_0] w-[210px] h-[48px] focus:ring-[#008000] focus:border-[#008000] ' required />
                  <div className='flex justify-center items-center cursor-pointer  border-solid  border-[0.5px] border-[#393] rounded-[10px_0_0_10px] px-2'><p className='text-[#393]'>تایید ایمیل</p></div>
                </div>
                {errors.email?.type === "required" && <p className='text-red-500 font-normal text-xs'>ایمیل خود را وارد کنید</p>}
                {errors.email?.type === "pattern" && <p className='text-red-500 font-normal text-xs'>ایمیل نامعتبر</p>}
              </div>
            </form>
          </div>


          <div className='flex gap-6'>
            <Location />
            <Education />
          </div>

          <Favorites />
          <Button_info_operation handleSubmit={handleSubmit} onSubmit={onSubmit} />

        </FormProvider>
      </div>


    </Layout_profil_user>

  );
}

export default index
