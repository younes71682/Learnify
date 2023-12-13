import Sidbar from '@/components/user/Account/Sidbar';
import React, { useState } from 'react'

const index = () => {

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

  const [add, setAdd] = useState(false)
  const handleAdd = () => {
    setAdd(true)
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
          <div className='flex flex-wrap gap-4 w-[90%]'>
            <input placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2' required />
            <input placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2 ' required />
            <input placeholder='*ایمیل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2 ' required />
            <input placeholder='جنسیت' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2 ' required />
            <input placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2' required />
          </div>
        </div>


        <div className='flex gap-6'>

          <div className='flex flex-col w-[28%] pt-5 pr-4 pb-9 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
              <img src='/icon/user/account/info_user/location.svg' alt='Location' />
              <h2>محل سکونت</h2>
            </div>
            <div className='flex flex-col gap-4'>
              <input placeholder='122' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px]' />
              <input placeholder='122' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px]' />
            </div>
          </div>

          <div className='flex flex-col w-[72%] pt-5 pr-4 pb-8 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
              <img src='/icon/user/account/info_user/education.svg' alt='Education' />
              <h2>تحصیلات</h2>
            </div>
            <div className='flex flex-wrap gap-4 w-[90%]'>
              <input placeholder='نام موسسه/دانشگاه' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2' />
              <input placeholder='رشته تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2' />
              <input placeholder='مقطع تحصیلی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] placeholder:pr-2' />
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-6 pr-4 pt-5 pb-9 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>

          <div className='flex items-center gap-1 text-lg'>
            <img src='/icon/user/account/info_user/like.svg' alt='Education' />
            <h2>علاقه‌مندی‌ها</h2>
          </div>

          <div className='flex flex-wrap gap-6 w-[90%]'>
            {favorites.map((item) => {
              return (
                <div className='flex items-center justify-between border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] pr-2' onClick={handleAdd}>
                  <div>{item.title}</div>
                  <div>{item.icon}</div>
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
