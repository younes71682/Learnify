 import Sidbar from '@/components/user/Account/Sidbar'
import React from 'react'

const Your_comments = () => {
  return (
    <div className='bg-[#FBFBFB]'>
      <div className='py-[71px]  mx-[139px] flex gap-2 justify-between'>
        <Sidbar />    
        <div className='w-[870px]  p-4 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[10px]'>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g id="vuesax/linear/messages-2">
                <g id="messages-2">
                  <path id="Vector" d="M18.4698 16.83L18.8598 19.99C18.9598 20.82 18.0698 21.4 17.3598 20.97L13.1698 18.48C12.7098 18.48 12.2599 18.45 11.8199 18.39C12.5599 17.52 12.9998 16.42 12.9998 15.23C12.9998 12.39 10.5398 10.09 7.49985 10.09C6.33985 10.09 5.26985 10.42 4.37985 11C4.34985 10.75 4.33984 10.5 4.33984 10.24C4.33984 5.68999 8.28985 2 13.1698 2C18.0498 2 21.9998 5.68999 21.9998 10.24C21.9998 12.94 20.6098 15.33 18.4698 16.83Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_2" d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </g>
            </svg>
            <p className='mr-2 text-lg'>نظرات ثبت شده</p>
          </div>
          <div className='flex flex-wrap  justify-around'>
            <div className='p-3 w-[409px] mb-2 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[10px] flex'>
              <img src="/images/user/courses/iconS.png" alt="" />
              <div className='flex w-[274px] pr-7 justify-between'>
                <div >
                  <p className='font-bold'>آموزش Next.js</p>
                  <div>
                  </div>
                  <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.70001 2.17513L2.68668 4.64102C1.40001 5.4316 1.40001 7.20102 2.68668 7.99161L6.70001 10.4575C7.42001 10.903 8.60668 10.903 9.32668 10.4575L13.32 7.99161C14.6 7.20102 14.6 5.43788 13.32 4.64729L9.32668 2.18141C8.60668 1.72964 7.42001 1.72964 6.70001 2.17513Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.75325 8.79492L3.74658 11.7377C3.74658 12.5345 4.39992 13.3879 5.19992 13.6388L7.32658 14.3039C7.69325 14.4169 8.29992 14.4169 8.67325 14.3039L10.7999 13.6388C11.5999 13.3879 12.2532 12.5345 12.2532 11.7377V8.82629" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.2666 10.0001V6.23535" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-xs mr-[2px]'>امیرحسام میرصادقی</p>
                  </div>
                  <p className='text-xs mt-5'>خیلی راضی بودم از کار ایشون، بسیار از پایه می گفتن و بیان شیوایی هم داشتن.</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                  <path d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.8499 9.13965L18.1999 19.2096C18.0899 20.7796 17.9999 21.9996 15.2099 21.9996H8.7899C5.9999 21.9996 5.9099 20.7796 5.7999 19.2096L5.1499 9.13965" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.3301 16.5H13.6601" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 12.5H14.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='p-3 w-[409px] mb-2 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[10px] flex'>
              <img src="/images/user/courses/iconS.png" alt="" />
              <div className='flex w-[274px] pr-7 justify-between'>
                <div >
                  <p className='font-bold'>آموزش Next.js</p>
                  <div>
                  </div>
                  <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.70001 2.17513L2.68668 4.64102C1.40001 5.4316 1.40001 7.20102 2.68668 7.99161L6.70001 10.4575C7.42001 10.903 8.60668 10.903 9.32668 10.4575L13.32 7.99161C14.6 7.20102 14.6 5.43788 13.32 4.64729L9.32668 2.18141C8.60668 1.72964 7.42001 1.72964 6.70001 2.17513Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.75325 8.79492L3.74658 11.7377C3.74658 12.5345 4.39992 13.3879 5.19992 13.6388L7.32658 14.3039C7.69325 14.4169 8.29992 14.4169 8.67325 14.3039L10.7999 13.6388C11.5999 13.3879 12.2532 12.5345 12.2532 11.7377V8.82629" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.2666 10.0001V6.23535" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-xs mr-[2px]'>امیرحسام میرصادقی</p>
                  </div>
                  <p className='text-xs mt-5'>خیلی راضی بودم از کار ایشون، بسیار از پایه می گفتن و بیان شیوایی هم داشتن.</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                  <path d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.8499 9.13965L18.1999 19.2096C18.0899 20.7796 17.9999 21.9996 15.2099 21.9996H8.7899C5.9999 21.9996 5.9099 20.7796 5.7999 19.2096L5.1499 9.13965" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.3301 16.5H13.6601" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 12.5H14.5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div >
  )
}

export default Your_comments


