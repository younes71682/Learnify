import Layout from '@/components/Layout'
import Sidbar from '@/components/user/Account/Sidbar'
import React from 'react'
import { Progress } from 'flowbite-react';
import ProgressBar from "@ramonak/react-progress-bar";


const My_training = () => {


  return (
    <div className='bg-[#FBFBFB] mt-3'>
      <div className='mx-[136px] max-[1144px]:mx-[50px] max-[1144px]:justify-center flex flex-wrap justify-between py-[76px]'>
        <Sidbar />
        <div className='w-[870px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] p-4 rounded-[10px]'>
          <div>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.7397V4.6697C22 3.4697 21.02 2.5797 19.83 2.6797H19.77C17.67 2.8597 14.48 3.9297 12.7 5.0497L12.53 5.1597C12.24 5.3397 11.76 5.3397 11.47 5.1597L11.22 5.0097C9.44 3.8997 6.26 2.8397 4.16 2.6697C2.97 2.5697 2 3.4697 2 4.6597V16.7397C2 17.6997 2.78 18.5997 3.74 18.7197L4.03 18.7597C6.2 19.0497 9.55 20.1497 11.47 21.1997L11.51 21.2197C11.78 21.3697 12.21 21.3697 12.47 21.2197C14.39 20.1597 17.75 19.0497 19.93 18.7597L20.26 18.7197C21.22 18.5997 22 17.6997 22 16.7397Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5.49023V20.4902" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.75 8.49023H5.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 11.4902H5.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='text-lg mr-2'>آموزش های من</p>
            </div>
            <div className='flex mt-4'>
              <div className='font-bold text-base'> مرتب سازی بر اساس:</div>
              <div className='  mr-4'>
                <input className='ml-1' name='sortingDate' type="radio" />
                <label htmlFor="">جدید ترین</label>
              </div>
              <div className='mr-4'>
                <input className='ml-1' name='sortingDate' type="radio" />
                <label htmlFor="">قدیمی ترین</label>
              </div>
            </div>
            <div className=' mt-8  shadow-[0px_0px_20px_rgba(0,0,0,0.05)] p-4 rounded-[10px] flex px-[14px] py-[23px] w-[834px]'>
              <img src="/images/user/courses/next1.png" alt="" />
              <div className='  mr-8 w-full'>
                <div className='flex  justify-between  items-center font-bold  text-lg'>
                  <p>آموزش Next.js</p>
                  <div className='flex items-center'>
                    <p className='text-sm ml-1'>مطالعه و یادگیری</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.2602 15.5297L9.74023 11.9997L13.2602 8.46973" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.70001 2.17513L2.68668 4.64102C1.40001 5.4316 1.40001 7.20102 2.68668 7.99161L6.70001 10.4575C7.42001 10.903 8.60668 10.903 9.32668 10.4575L13.32 7.99161C14.6 7.20102 14.6 5.43788 13.32 4.64729L9.32668 2.18141C8.60668 1.72964 7.42001 1.72964 6.70001 2.17513Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.75325 8.79492L3.74658 11.7377C3.74658 12.5345 4.39992 13.3879 5.19992 13.6388L7.32658 14.3039C7.69325 14.4169 8.29992 14.4169 8.67325 14.3039L10.7999 13.6388C11.5999 13.3879 12.2532 12.5345 12.2532 11.7377V8.82629" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.2666 10.0001V6.23535" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className='text-xs mr-[2px]'>امیرحسام میرصادقی</p>

                </div>
                <div className='flex  justify-end mt-12 gap-[6px]'>
                  <div className='h-[24px] w-[42px] bg-[#F6FFF6] px-1 py-[5px] border border-[#158212] rounded flex justify-center items-center font-normal text-xs text-[#158212]'>
                    7 فصل
                  </div>
                  <div className='h-[24px] w-[55px] px-1 py-[5px] border border-[#DEB509] rounded flex justify-center bg-[#FFFDED] font-normal text-xs text-[#DEB509]'>
                    48 ساعت
                  </div>
                </div>
                {/* progress bar div */}
                <div className='mt-4  flex items-center justify-between text-xs '>
                  <p>میزان پیشرفت</p>
                  <ProgressBar completed={60} bgColor='#FFCC12' width='523px' height='8px' customLabel=' ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My_training
