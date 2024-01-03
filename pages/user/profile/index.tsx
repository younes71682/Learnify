import React from 'react'

import { FormProvider, useForm } from 'react-hook-form';

 import Education from '@/components/user/Account/Education';
import Favorites from '@/components/user/Account/Favorites';
import Location from '@/components/user/Account/Location';
import Button_info_operation from '@/components/button/Button_info_operation';
import Image from 'next/image';
import Layout_profil_user from '@/components/layout/Layout_user/Layout_profil_user';
import Select_gender from '@/components/select/Select_gender';


type FormeValue = {
  username: string
  phoneNumber: string
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
      username: "",
      phoneNumber: "",
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
          <div className='flex flex-col items-start gap-6 pr-4 pt-5 pb-10 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '>
            <div className='flex items-center gap-1 text-lg'>
              <Image src='/icon/user/account/info_user/user.svg' alt='icon' width={24} height={24} />
              <h2>اطلاعات کاربری</h2>
            </div>
            <form className='flex flex-wrap gap-4 w-[90%]' onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='flex flex-col'>
                <input {...register("username", { required: { value: true, message: "نام خود را وارد کنید" } })} placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2  outline-[#008000]  ' required />
                <p className='text-red-500 font-normal text-xs'>{errors.username?.message}</p>
              </div>
              <div className='flex flex-col'>
                <input {...register("phoneNumber", { required: { value: true, message: "شماره تلفن خود را وارد کنید " }, })} placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2 outline-[#008000] ' required />
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
              <div className='flex flex-col'>
                <input {...register("datebirth", { pattern: { value: /^[0-9]+[/]+[0-9]+[/]+[0-9]*$/, message: "تاریخ را صحیح وارد کنید" } })} placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2 outline-[#008000]' required />
                <p className='text-red-500 font-normal text-xs'>{errors.datebirth?.message}</p>
              </div>
              {/* <DevTool control={control} /> */}
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
