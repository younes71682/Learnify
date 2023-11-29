import React from 'react'
import { motion } from "framer-motion"
import Section_1 from '@/components/Section_1'
import Section_2 from '@/components/Section_2'
import LogoMotion from '@/components/LogoMotion'



const index = () => {

  return (
    <div className='flex flex-col'>


      <div className='flex'>

        <div className='flex flex-col items-end justify-center mx-auto gap-[70px] text-[#484848]'>
          <LogoMotion />
          <div className='flex text-2xl w-[482px]'>
            <p>با لرنیفای به صورت نامحدود و با منابع بی پایان یاد بگیرید وبه توسعه شخصی و حرفه ای خود ادامه دهید</p>
          </div>

          <div className='flex items-center bg-[#008000] px-4 py-2 rounded-xl text-xl text-white relative right-36'>
            <p>مشاهده دوره ها</p>
          </div>
        </div>

        <div className=''>
          <img className='' src='/images/header/header.png' alt='Header' />
          <div className='absolute -z-10 top-40 left-0'>
            <img className='' src='/images/header/background_1_header.png' />
            <img className='' src='/images/header/background_2_header.png' />
          </div>
          {/* <img src='/images/header/background_2_header.png' /> */}
        </div>


      </div>


      <Section_1 />


      <div className='flex justify-center mx-auto pb-11 pt-28'><h1>از دسته بندی های زیر دوره مورد نظر خود را انتخاب کنید</h1></div>
      <Section_2 />

    </div>

  )
}

export default index
