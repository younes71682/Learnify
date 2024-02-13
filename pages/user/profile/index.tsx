import React, { useContext } from 'react'

import { FormProvider, useForm } from 'react-hook-form';

import Education from '@/components/user/Account/Education';
import Favorites from '@/components/user/Account/Favorites';
import Location from '@/components/user/Account/Location';
import Button_info_operation from '@/components/button/Button_info_operation';
import Image from 'next/image';
import Select_gender from '@/components/select/Select_gender';
import Birthday from '@/components/user/date/Birthday';
import Update_Info from '@/components/api/modares/Update_Info';
import { CircleLoader, FadeLoader } from 'react-spinners';
import Layout_profil_user from '@/components/layout/Layout_profil_user';


type FormeValue = {
  name: string
  family: string,
  phone_number: string
  email: string
  gender: string
  birthday: string
  image_id: number
  state: string,
  city: string,
  university: string,
  field_of_study: string,
  educational_stage: string,
}

const index = () => {


  const { data_Show_Information, pending_data_Show_Information, mutate_uploadProfile, pending_uploadProfile, success_uploadProfile, error_uploadProfile } = Update_Info()


  const info = data_Show_Information?.data.data
  const name = info?.name
  const family = info?.family
  const phone_number = info?.phone_number
  const email = info?.email
  const gender = info?.gender
  const birthday = info?.birthday
  const state = info?.state
  const city = info?.city
  const university = info?.university
  const field_of_study = info?.field_of_study
  const educational_stage = info?.educational_stage


  const methods = useForm<FormeValue>()
  const { register, control, handleSubmit, formState } = methods
  const { errors } = formState


  const handleSubmitImage = (event) => {
    const file = event.target.files[0]
    mutate_uploadProfile({ image: file })
  }


  const onSubmit = (data: FormeValue) => {
    console.log(data)
    // image_id = localStorage.getItem('ProfilePectureId')
  }


  return (
    <div>

      {pending_data_Show_Information ?

        <div className='flex justify-center items-center h-[100vh]'>
          <CircleLoader color="#36d7b7" size={65} />
        </div>

        :
        <FormProvider {...methods}>

          <Layout_profil_user>

            <div className='flex flex-col gap-6 w-[64%] h-[112vh]'>

              <div className='flex justify-between gap-6'>
                <div className='flex flex-col items-start gap-6 pr-4 pt-5  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '>
                  <div className='flex items-center gap-1 text-lg'>
                    <Image src='/icon/user/account/info_user/user.svg' alt='icon' width={24} height={24} />
                    <h2>اطلاعات کاربری</h2>
                  </div>

                  <form className='flex flex-wrap' onSubmit={handleSubmit(onSubmit)} noValidate>

                    <div className='flex flex-col gap-1 h-[71px] ml-4'>
                      <input {...register("name", { required: true })} defaultValue={name} placeholder='*نام' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 outline-[#008000]  ' required />
                      {errors.name?.type === "required" && <p className='text-red-500 font-normal text-xs'>نام خود را وارد کنید</p>}
                    </div>

                    <div className='flex flex-col gap-1 h-[71px] ml-4'>
                      <input {...register("family", { required: true })} defaultValue={family} placeholder='*نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 outline-[#008000]  ' required />
                      {errors.family?.type === "required" && <p className='text-red-500 font-normal text-xs'>نام خانوادگی خود را وارد کنید</p>}
                    </div>

                    <div className='flex flex-col gap-1 h-[71px] ml-4'>
                      <input type='tel' defaultValue={phone_number} {...register("phone_number", { required: true, maxLength: 11, pattern: /((0?9)|(\+?989))\d{9}/g })} placeholder='شماره موبایل*' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 focus:ring-[#008000] focus:border-[#008000] placeholder:text-right ' />
                      {errors.phone_number?.type === "required" && <p className='text-red-500 font-normal text-xs'>شماره تلفن خود را وارد کنید</p>}
                      {errors.phone_number?.type === "maxLength" && <p className='text-red-500 font-normal text-xs font-Byekan'>شماره تلفن نمیتواند بیشتر از 11 رقم باشد</p>}
                      {errors.phone_number?.type === "pattern" && <p className='text-red-500 font-normal text-xs '>شماره تلفن نامعتبر</p>}
                    </div>

                    <Select_gender gender={gender} />

                    <Birthday birthday={birthday} />

                    <div className='flex flex-col gap-1 h-[71px] ml-4'>
                      <div className='flex'>
                        <input type='email' dir='ltr' defaultValue={email} {...register("email", { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, required: true, validate: { notAdmin: (fieldValue) => { return (fieldValue !== "admin@example.com" || "ایمیل دیگری وارد کنید") }, notBlackListed: (fieldValue) => { return (!fieldValue.endsWith("baddomain.com") || "This domin ids not supoort") } } })} placeholder='*ایمیل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[0_10px_10px_0] w-[210px] h-[48px] focus:ring-[#008000] focus:border-[#008000] placeholder:text-right ' />
                        <div className='flex justify-center items-center cursor-pointer  border-solid  border-[0.5px] border-[#393] rounded-[10px_0_0_10px] px-2'><p className='text-[#393]'>تایید ایمیل</p></div>
                      </div>
                      {errors.email?.type === "required" && <p className='text-red-500 font-normal text-xs'>ایمیل خود را وارد کنید</p>}
                      {errors.email?.type === "pattern" && <p className='text-red-500 font-normal text-xs'>ایمیل نامعتبر</p>}
                    </div>

                    <div className="flex w-[35%] h-full">
                    </div>

                  </form>
                </div>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-full cursor-pointer hover:bg-gray-100">
                  <input {...register('image_id')} multiple onChange={handleSubmitImage} id="dropzone-file" type="file" className="hidden" />
                  {pending_uploadProfile === true ?
                    <FadeLoader color="#36d7b7" />
                    :
                    <div className="flex flex-col items-center justify-center ">
                      <Image src="/icon/modares/account/apload_photo.svg" alt='apload' width={70} height={44} className='mb-3' />
                      <p className="text-[#1F2937] leading-6 tracking-wider"><span className="text-[#3B82F6] font-semibold ml-1">browse</span>اپلود تصویر خود</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Maximum size: 5MB</p>
                    </div>}
                  {errors.image_id?.type === "required" && <p className='text-red-500 font-normal text-xs'>پروفایل خود را مشخص کنید</p>}
                  {success_uploadProfile === true && <p className='text-green-500 font-normal text-xs'>آپلود عکس با موفقیت انجام شد</p>}
                  {error_uploadProfile === true && <p className='text-red-500 font-normal text-xs'>آپلود عکس با مشکل مواجه شده،مجددا تلاش کنید</p>}
                </label>
              </div>

              <div className='flex gap-6'>
                <Location state={state} city={city} />
                <Education university={university} field_of_study={field_of_study} educational_stage={educational_stage} />
              </div>

              <Favorites />
              <Button_info_operation handleSubmit={handleSubmit} onSubmit={onSubmit} />

            </div>


          </Layout_profil_user>
        </FormProvider>

      }
    </div>
  );
}

export default index
