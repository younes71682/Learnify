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

      <div className='flex flex-col justify-center px-[190px] '>

        <div className='flex justify-between'>

          <img src='/images/global/Rectangle.png' className='w-[206px] h-[110px]' />

          <div className='flex gap-10'>
            <img
              src="/icon/footer/instagram.svg"
              alt='Instagram'
            />
            <img
              src="/icon/footer/twitter.svg"
              alt='Twitter'
            />
            <img
              src="/icon/footer/linkedin.svg"
              alt='Linkedin'
            />
          </div>
        </div>

        <div className='flex justify-between items-start text-[#484848] '>

          <div className='flex flex-col gap-[1.5rem] pr-6'>
            <h3 className='text-[1.125rem] font-bold'>درباره لرنیفای</h3>
            <p className='w-[19.3rem] font-normal'>ما در لرنیفای‌به ایجاد محیطی‌اشتیاق‌آور برای یادگیری اعتقاد داریم.  هدف ما توانمندی شما در یادگیری و تسلط بر مهارت‌های جدید است. </p>
          </div>

          <div>
            <ul className='flex flex-col gap-[1.5rem]'>
              <h3 className='text-[1.125rem] font-bold'>بخش های سایت</h3>
              <li className='flex gap-2'><img src='/icon/footer/point.svg' alt='Point' /><Link href="/">تدریس کنید</Link></li>
              <li className='flex gap-2'><img src='/icon/footer/point.svg' alt='Point' /><Link href="/">درباره ماه</Link></li>
              <li className='flex gap-2'><img src='/icon/footer/point.svg' alt='Point' /><Link href="/">بلاگ</Link></li>
            </ul>
          </div>


            <div>
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
  )
}

export default Footer

