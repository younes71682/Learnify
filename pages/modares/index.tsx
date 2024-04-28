import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Services from '@/components/modares/home_page/Services'
import Tab_layout from '@/components/modares/home_page/tab/Tab_layout'
import Start_teaching from '@/components/modares/link/Start_teaching'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'


const index = () => {

  const conditionsRed = useRef()
  const handleConditions = () => {
    conditionsRed.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <Navbar />
      <div className='flex justify-center relative bg-[#F5F5F5]'>

        <div className='flex justify-between w-[85%] pt-16 max-md:flex-col max-md:items-center max-md:py-8 max-md:pt-0 max-md:gap-2 '>
          <div className='flex flex-col w-[50%] max-md:w-[100%] gap-2 pt-10'>
            <div className='w-[90%]'>
              <h2 className='text-[#484848] text-[32px] font-bold max-lg:text-[28px] [@media(max-width:450px)]:text-[20px]'>مهارت  خود را  آموزش دهید و درآمد همیشگی کسب کنید .</h2>
            </div>
            <div className='flex items-center gap-3'>
              <div onClick={handleConditions} className='flex justify-center items-center w-[165px] h-[44px] border-solid border-[0.5px] border-[#FF725E] rounded-[12px] cursor-pointer '>
                <p className='text-xl text-[#FF725E] max-lg:text-base'>مطالعه شرایط</p>
              </div>
              <Link href='modares/teaching' className='flex justify-center items-center w-[165px] h-[44px] bg-[#FF725E] rounded-[12px]'>
                <p className='text-xl text-[#FFF] max-lg:text-base'>شروع تدریس</p>
              </Link>
            </div>
          </div>

          <div className='flex flex-1'>
            <Image src="/icon/modares/login/header.svg" alt='header' width={604} height={343} />
          </div>
        </div>

        <div className=' flex w-full justify-center absolute -z-10 top-0  max-lg:hidden'>
          <Image src="/icon/modares/login/bg_header.svg" alt='' width={1520} height={580} />
        </div>
      </div>

      <Services />

      <div className='flex flex-col w-[80%] items-center mx-auto mt-28' ref={conditionsRed}>
        <h1 className='text-2xl text-[#484848] font-bold mb-16 text-center'>چگونه در لرنیفای شروع به تدریس کنیم؟</h1>
        <Tab_layout />
      </div>

      <Start_teaching />

      <Footer />
    </div>
  )
}

export default index
