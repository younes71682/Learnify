import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-y-[51px]'>

      <div>
        <Image
          src="/icon/footer/linear_gradient.svg"
          alt='Linear_Gradient'
          width={1440}
          height={2}
          className='flex mx-auto'
        />
      </div>

      <div className='flex flex-col mx-[11.5rem]'>

        <div className='flex justify-between'>

          <div><img src='/images/Rectangle.png' className='w-[13rem] h-[7rem]' /></div>
          <div className='flex justify-between gap-10'>
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

        <div className='flex justify-between text-[#484848]'>

          <div className='flex flex-col gap-y-[1.5rem]'>
            <h3 className='text-[1.125rem] font-bold leading-6'>درباره لرنیفای</h3>
            <p className='w-[19.3rem] font-normal leading-6'>ما در لرنیفای‌به ایجاد محیطی‌اشتیاق‌آور برای یادگیری اعتقاد داریم.  هدف ما توانمندی شما در یادگیری و تسلط بر مهارت‌های جدید است. </p>
          </div>

          <div>
            <ul className='flex flex-col gap-y-[1.5rem]'>
              <h3 className='text-[1.125rem] font-bold'>بخش های سایت</h3>
              <li className='flex gap-2 font-medium'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><Link href="/">تدریس کنید</Link></li>
              <li className='flex gap-2 font-medium'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><Link href="/">درباره ماه</Link></li>
              <li className='flex gap-2 font-medium'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><Link href="/">بلاگ</Link></li>
            </ul>
          </div>

          <div className='flex justify-between gap-24'>
            <div>
              <ul className='flex flex-col gap-y-[1.5rem]'>
                <h3 className='text-[1.125rem] font-bold'>ارتباط با ما </h3>
                <li className='flex gap-2 font-medium'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><p>آیدی تلگرام:</p></li>
                <li className='flex gap-2 font-medium'><Image src='/icon/footer/point.svg' alt='Point' width={4} height={4} /><p>شماره تماس:</p></li>
              </ul>
            </div>

            <div>
              <ul className='flex flex-col items-end gap-y-[1.5rem] mt-[3rem]'>
                <li><Link className='font-normal text-[14px] ' href="/">LEARNIFY_IR@</Link></li>
                <li><Link className='font-normal text-[14px]' href="/">learnify@gmail.com</Link></li>
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