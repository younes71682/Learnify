import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-[51px]'>

      <div className='flex mx-auto'>
        <Image
          src="/icon/footer/linear_gradient.svg"
          alt='Linear_Gradient'
          width={1440}
          height={2}
          className=''
        />
      </div>

      <div className='flex flex-col justify-center px-[200px] '>

        <div className='flex justify-between'>

          <img src='/images/Rectangle.png' className='w-[206px] h-[110px]' />

          <div className='flex gap-10'>
            <Image
              src="/icon/footer/instagram.svg"
              alt='Instagram'
              width={24}
              height={24}
            />
            <Image
              src="/icon/footer/twitter.svg"
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src="/icon/footer/linkedin.svg"
              alt='Linkedin'
              width={24}
              height={24}
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
              <li className='flex gap-2'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><Link href="/">تدریس کنید</Link></li>
              <li className='flex gap-2'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><Link href="/">درباره ماه</Link></li>
              <li className='flex gap-2'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><Link href="/">بلاگ</Link></li>
            </ul>
          </div>

          <div className='flex items-end gap-48'>

            <div>
              <ul className='flex flex-col gap-[1.5rem]'>
                <h3 className='text-[1.125rem] font-bold'>ارتباط با ما </h3>
                <li className='flex gap-2'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><p>آیدی تلگرام:</p></li>
                <li className='flex gap-2'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><p>شماره تماس:</p></li>
              </ul>
            </div>
            
            <div>
              <ul className='flex flex-col items-end gap-[1.5rem] text-[14px]'>
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


{/* <ul className='flex flex-col gap-y-[1.5rem]'>
<h3 className='text-[1.125rem] font-bold'>ارتباط با ما </h3>
<li className='flex'>
  <Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} />
  <div className='flex justify-between m-a'>
  <p className='font-medium'>آیدی تلگرام:</p>
  <Link className='font-normal' href="/">@LEARNIFY_IR</Link>
  </div>
</li>
<li className='flex'>
  <Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} />
  <div className='flex justify-between'>
  <p className='font-medium'>شماره تماس:</p>
  <Link className='font-normal' href="/">learnify@gmail.com</Link>
  </div>
</li>
</ul> */}