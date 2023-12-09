import Header from '@/components/blog/Header'
import Link from 'next/link'
import React from 'react'
 
const index = () => {

  const blog = [
    { id: 1, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/1.png' alt='blog' /> },
    { id: 2, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/8.png' alt='blog' /> },
    { id: 3, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/3.png' alt='blog' /> },
    { id: 4, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/7.png' alt='blog' /> },
    { id: 5, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/4.png' alt='blog' />, detail: "همانطور که پیدا کردن یک مکان بدون استفاده از آدرس و نقشه دشوار است ، برای گوگل هم دسترسی به همه صفحات سایت بدون نقشه دشوار است. یک نقشه سایت (Sitemap) خوب می‌تواند به خزنده های گوگل در کراول کردن سایت و هدایت آنها کمک کند.", link: "مشاهده ادامه مطلب" },
    { id: 6, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/5.png' alt='blog' />, detail: "همانطور که پیدا کردن یک مکان بدون استفاده از آدرس و نقشه دشوار است ، برای گوگل هم دسترسی به همه صفحات سایت بدون نقشه دشوار است. یک نقشه سایت (Sitemap) خوب می‌تواند به خزنده های گوگل در کراول کردن سایت و هدایت آنها کمک کند.", link: "مشاهده ادامه مطلب" },
    { id: 7, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/3.png' alt='blog' /> },
    { id: 8, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/7.png' alt='blog' /> },
    { id: 9, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/8.png' alt='blog' /> },
    { id: 10, title: "نقشه سایت یا سایت مپ چیست؟", img: <img src='/images/user/blog/2.png' alt='blog' /> },
  ]

  return (
    <div>
      <Header /> 
    
      <div className='flex flex-wrap justify-center gap-6 mx-[136px]'>
        {blog.map((item, index) => {
          if (index === 4 || index === 5) {
            return (
              <div className='flex items-center w-[572px] h-[212px] rounded-[0px_15px_15px_20px] shadow-[0_0_20px_rgba(0,0,0,0.5)]'>
                <div className='flex rounded-[15px] w-[274px] h-full'>{item.img} </div>
                <div className='flex flex-col items-start flex-1 px-6 '>
                  <h3 className='text-base font-bold'>{item.title}</h3>
                  <p className='text-xs font-normal leading-6 pt-[5px]'>{item.detail}</p>
                  <div className='flex items-center gap-[3px] pt-4 text-[#008000] text-xs font-bold'>
                    <Link href="/">{item.link}</Link>
                    <img src='/icon/blog/left.svg' alt='Left' />
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className='flex flex-col items-center rounded-[15px_15px_20px_20px] shadow-[0_0_20px_rgba(0,0,0,0.5)] w-[274px] h-[266px]'>
                <div className='flex rounded-[15px_15px_0_0] w-full h-[181px]'>{item.img} </div>
                <Link href="/" className='flex items-center flex-1'>{item.title}</Link>
              </div>
            )
          }
        })}
      </div>

 
    </div >
  )
}

export default index
