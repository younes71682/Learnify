import Footer from '@/components/layout/Footer'
import Nav_login from '@/components/layout/Layout_modares/Nav_login'
import Services from '@/components/modares/home_page/Services'
import Tab_layout from '@/components/modares/home_page/tab/Tab_layout'
import Start_teaching from '@/components/modares/link/Start_teaching'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div>
      <Nav_login />

      <div className='bg-[#F5F5F5] w-[100%] h-[400px] flex justify-center pt-16 relative '>
        <div className='flex flex-col gap-2 pt-10'>
          <div className='w-[80%]'>
            <h2 className='text-[#484848] text-[32px] font-bold'>مهارت  خود را  آموزش دهید و درآمد همیشگی کسب کنید .</h2>
          </div>
          <div className='flex items-center w-[55%] justify-between'>
            <div className='flex justify-center items-center w-[49%] h-[44px] border-solid border-[0.5px] border-[#FF725E] rounded-[12px]'><p className='text-xl text-[#FF725E]'>مطالعه شرایط</p></div>
            <div className='flex justify-center items-center w-[49%] h-[44px] bg-[#FF725E] rounded-[12px]'><p className='text-xl text-[#FFF]'>شروع تدریس</p></div>
          </div>
        </div>
        <div>
          <Image src="/icon/modares/login/header.svg" alt='' width={604} height={343} />
        </div>
        <div className=' flex w-full justify-center absolute -z-10 top-0  '>
          <Image src="/icon/modares/login/bg_header.svg" alt='' width={1520} height={580} />
        </div>
      </div>

      <Services />

      <div className='flex flex-col w-[80%] items-center mx-auto mt-28'>
        <h1 className='text-2xl text-[#484848] font-bold mb-16'>چگونه در لرنیفای شروع به تدریس کنیم؟</h1>
        <Tab_layout />
      </div>

      <Start_teaching />

      <Footer />
    </div>
  )
}

export default index
