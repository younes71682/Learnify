import Sidbar from '@/components/user/Account/Sidbar'
import Layout_User from '@/components/user/layout_user/Layout_User'
import React from 'react'

const Notification = () => {

  return (

    <Layout_User showFooter={false}>

      <div className='flex mt-[71px]'>
        <Sidbar />
        <div className='w-[870px]  p-4 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[10px]'>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g id="vuesax/linear/messages-2">
                <g id="messages-2">
                  <path id="Vector" d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_2" d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </g>
            </svg>
            <p className='font-medium text-lg text-[#000] mr-2'>پیام های ما</p>
          </div>
          <div className='flex  justify-around mt-6'>
            <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.05)] p-4 w-[395px] rounded-[10px]'>
              <p>آموزش کاربردی اتوکد</p>
              <div className='flex text-[#008000] '>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='font-normal text-sm'>سلمان طاهری</p>
              </div>
              <p className='mt-6'>واقعا بد بودن به کمک تدریس بد نتونستم به خوبی پاس کنم</p>
            </div>
            <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[395px] p-4 rounded-[10px]'>
              <p>آموزش کاربردی اتوکد</p>
              <div className='flex text-[#008000] '>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#008000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='font-normal text-sm'>سلمان طاهری</p>
              </div>
              <p className='mt-6'>واقعا بد بودن به کمک تدریس بد نتونستم به خوبی پاس کنم</p>
            </div>
          </div>
        </div>

      </div>

    </Layout_User>

  )
}

export default Notification
