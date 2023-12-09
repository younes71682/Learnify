import Sidbar from '@/components/user/Account/Sidbar';
import React from 'react'

const index = () => {

  return (
    <div className='flex gap-6'>
      <Sidbar />
      <div className='flex flex-col w-[1070px] bg-'>
        <div className='flex flex-col bg-red-500'>
          <div className='flex items-center text-lg'>
            <img src='/icon/user/account/info_user/user.svg' />
            <h2>اطلاعات کاربری</h2>
          </div>
          <div className='flex flex-wrap '>
            <input placeholder='ddd' className='border-solid border rounded-[10px] w-[28%] h-[48px]' required />
            <input placeholder='ddd' className='border-solid border rounded-[10px] w-[28%] h-[48px]' required />
            <input placeholder='ddd' className='border-solid border rounded-[10px] w-[28%] h-[48px]' required />
            <input placeholder='ddd' className='border-solid border rounded-[10px] w-[28%] h-[48px]' required />
            <input placeholder='ddd' className='border-solid border rounded-[10px] w-[28%] h-[48px]' required />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index
