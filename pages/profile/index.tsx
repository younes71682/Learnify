//use client
import Sidbar from '@/components/user/Account/Sidbar';
import React, { useState } from 'react'
import { DevTool } from "@hookform/devTools"
import { useForm } from 'react-hook-form';
import Select_gender from '@/components/Select_gender';




type FormeValue = {
  username: string
  phoneNumber: string
  email: string
  gender: string
  datebirth: string
}
const index = () => {


  const form = useForm<FormeValue>()
  const { register, control, handleSubmit } = form

  const submit = (data: FormeValue) => {
    console.log(data)
  }

  const favorites = [
    { id: 1, title: "توسعه وب", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "توسعه وب", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "امنیت و شبکه", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "طراحی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "فیلم و انیمیشن", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "نرم افزارهای کاربردی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "نرم افزارهای مهندسی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    { id: 1, title: "برنامه نویسی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
  ]


  const [add, setAdd] = useState(null)
  const handleAdd = (i: any) => {
    setAdd(add === i ? null : i)
  }



  return (
    <div className='flex gap-6 mt-[71px] mx-[136px]'>

      <Sidbar />

      <div className='flex flex-col gap-6 w-full'>

        <div className='flex flex-col items-start gap-6 pr-4 pt-5 pb-12 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
          <div className='flex items-center gap-1 text-lg'>
            <img src='/icon/user/account/info_user/user.svg' />
            <h2>اطلاعات کاربری</h2>
          </div>
          <form className='flex flex-wrap gap-4 w-[90%]' onSubmit={handleSubmit(submit)}>
            <input {...register("username")} placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px]  outline-[#008000] placeholder:pr-2 ' required />
            <input {...register("phoneNumber")} placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required />
            <div className='flex'>
              <input {...register("email")} placeholder='*ایمیل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[0_10px_10px_0] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required />
              <button className='text-[#393] border-solid border-[0.5px] border-[#393] rounded-[10px_0_0_10px] px-2' >تایید ایمیل</button>
            </div>
            {/* <input {...register("gender")} placeholder='جنسیت' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2 ' required /> */}
            <Select_gender />
            <input {...register("datebirth")} placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' required />
            <button>onsubmit</button>
            {/* <DevTool control={control} />  */}
          </form>
        </div>


        <div className='flex gap-6'>

          <div className='flex flex-col w-[28%] pt-5 pr-4 pb-9 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
              <img src='/icon/user/account/info_user/location.svg' alt='Location' />
              <h2>محل سکونت</h2>
            </div>
            <div className='flex flex-col gap-4'>
              <input placeholder='122' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000]' />
              <input placeholder='122' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000]' />
            </div>
          </div>

          <div className='flex flex-col w-[72%] pt-5 pr-4 pb-8 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
              <img src='/icon/user/account/info_user/education.svg' alt='Education' />
              <h2>تحصیلات</h2>
            </div>
            <div className='flex flex-wrap gap-4 w-[90%]'>
              <input placeholder='نام موسسه/دانشگاه' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' />
              <input placeholder='رشته تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' />
              <input placeholder='مقطع تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] outline-[#008000] placeholder:pr-2' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 pr-4 pt-5 pb-9 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>

          <div className='flex items-center gap-1 text-lg'>
            <img src='/icon/user/account/info_user/like.svg' alt='Education' />
            <h2>علاقه‌مندی‌ها</h2>
          </div>

          <div className='flex flex-wrap gap-6 w-[90%]'>
            {favorites.map((item, i) => {
              return (
                <div onClick={() => handleAdd(i)} >
                  {add === i ?
                    (<div className='flex items-center justify-between bg-[#008000] text-[#fbfbfb] border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] px-2'>
                      <div>{item.title}</div>
                      <div className=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 52 40" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.1743 4.14173L22.514 39.977L0 21.2131L4.24793 16.1156L21.5582 30.5386L45.9971 0L51.1743 4.14173Z" fill="white" />
                      </svg></div>
                    </div>)

                    : (<div className='flex items-center justify-between border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] pr-2'>
                      <div>{item.title}</div>
                      <div>{item.icon}</div>
                    </div>)}

                </div>
              )
            })}
          </div>
        </div>

        <div className='flex justify-end gap-2'>
          <div className='text-[#C93636] bg-white border-solid border-[1px] border-[#C93636] rounded-[10px] w-[14%] py-2 flex justify-center items-center'>انصراف</div>
          <div className='text-white bg-[#008000] rounded-[10px] w-[14%] py-2 flex justify-center items-center'>اعمال تغییرات</div>
        </div>

      </div>
    </div>
  );
}

export default index
