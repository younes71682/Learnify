import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (

    <div className='flex flex-col gap-[51px] mb-[101px]'>

      <div className='flex mx-auto'>
        <img
          src="/icon/footer/linear_gradient.svg"
          alt='Linear_Gradient'
        />
      </div>

      <div className='flex flex-wrap flex-col justify-center w-[80%] mx-auto'>

        <div className='flex flex-wrap max-[740px]:justify-around max-[749px]:gap-3  justify-between'>

          <img src='/images/global/Rectangle.png' className='w-[206px] h-[110px]' />

          <div className='flex gap-10'>
            <div className='cursor-pointer flex'><img src="/icon/footer/instagram.svg" alt='Instagram' /></div>
            <div className='cursor-pointer flex'><img src="/icon/footer/twitter.svg" alt='Twitter' /></div>
            <div className='cursor-pointer flex'><img src="/icon/footer/linkedin.svg" alt='Linkedin' /></div>
          </div>
        </div>
       
        <div className='flex  flex-wrap gap-2 justify-between max-[818px]:justify-center items-start text-[#484848] '>

          <div className='flex flex-col  gap-[1.5rem] pr-6'>
            <h3 className='text-[1.125rem] max-[463px]:mt-4 font-bold'>درباره لرنیفای</h3>
            <p className='w-[19.3rem] max-[417px]:w-[90%] font-normal'>ما در لرنیفای‌به ایجاد محیطی‌اشتیاق‌آور برای یادگیری اعتقاد داریم.  هدف ما توانمندی شما در یادگیری و تسلط بر مهارت‌های جدید است. </p>
          </div>

          <div>
            <ul className='flex flex-col gap-[1.5rem]'>
              <h3 className='text-[1.125rem] font-bold'>بخش های سایت</h3>
              <li className='flex gap-2 cursor-default'><img src='/icon/footer/point.svg' alt='Point' /><Link href="/modares">تدریس کنید</Link></li>
              <li className='flex gap-2 cursor-default'><img src='/icon/footer/point.svg' alt='Point' /><Link href="/user/about">درباره ماه</Link></li>
              <li className='flex gap-2 cursor-default'><img src='/icon/footer/point.svg' alt='Point' /><Link href="/user/blog">بلاگ</Link></li>
            </ul>
          </div>

          <div className='flex  max-[818px]:w-[50%] max-[540px]:w-[216px] justify-between w-[30%]'>
            <div className=''>
              <ul className='flex flex-col gap-[1.5rem]'>
                <h3 className='text-[1.125rem] font-bold'>ارتباط با ما </h3>
                <li className='flex gap-2'><img src='/icon/footer/point.svg' alt='Point' /><p>آیدی تلگرام:</p></li>
                <li className='flex gap-2'><img src='/icon/footer/point.svg' alt='Point' /><p>شماره تماس:</p></li>
              </ul>
            </div>

            <div>
              <ul className='flex flex-col items-end justify-end gap-[1.5rem] text-[14px] mt-14'>
                <li><Link href="/">LEARNIFY_IR@</Link></li>
                <li><Link href="/">learnify@gmail.com</Link></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer

