import React from 'react'
import { DevTool } from "@hookform/devTools"
import { useForm } from 'react-hook-form';



import Sidbar from '@/components/user/Account/Sidbar';
import Layout_User from '@/components/user/layout_user/Layout_User';
import Select_gender from '@/components/user/select/Select_gender';
import Education from '@/components/user/Account/Education';
import Favorites from '@/components/user/Account/Favorites';
import Location from '@/components/user/Account/Location';
import Button_info_operation from '@/components/button/Button_info_operation';
import Image from 'next/image';


type FormeValue = {
  username: string
  phoneNumber: string
  email: string
  gender: string
  datebirth: string
}

const index = () => {


  const form = useForm<FormeValue>({
    defaultValues: {
      username: "یونس",
      phoneNumber: "0993666",
      email: "",
      datebirth: ""
    }
  })

  const { register, control, handleSubmit, formState } = form

  const { errors } = formState


  const submit = (data: FormeValue) => {
    console.log(data)
  }




  return (

    <Layout_User showFooter={false}>

      <div className='flex gap-6 justify-center h-[140vh] pt-20'>

        <Sidbar />


        <div className='flex flex-col gap-6 w-[64%] h-[112vh]'>

          <div className='flex flex-col items-start gap-6 pr-4 pt-5 pb-10 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '>
            <div className='flex items-center gap-1 text-lg'>
              <Image src='/icon/user/account/info_user/user.svg' alt='icon' width={24} height={24} />
              <h2>اطلاعات کاربری</h2>
            </div>
            <form className='flex flex-wrap gap-4 w-[90%]' onSubmit={handleSubmit(submit)} noValidate>
              <div className='flex flex-col'>
                <input {...register("username", { required: { value: true, message: "نام خود را وارد کنید" } })} placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px]  outline-[#008000] placeholder:pr-2 ' required />
                <p className='text-red-500 font-normal text-xs'>{errors.username?.message}</p>
              </div>
              <div className='flex flex-col'>
                <input {...register("phoneNumber", { required: { value: true, message: "شماره تلفن خود را وارد کنید " }, })} placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required />
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
                <input {...register("datebirth", { pattern: { value: /^[0-9]+[/]+[0-9]+[/]+[0-9]*$/, message: "تاریخ را صحیح وارد کنید" } })} placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' required />
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
          <Button_info_operation />


        </div>

      </div>

    </Layout_User>

  );
}

export default index