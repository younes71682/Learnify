import { Inter } from 'next/font/google'
import React from 'react'
import Section_1 from '@/components/Section_1'
import Section_2 from '@/components/Section_2'
import LogoMotion from '@/components/LogoMotion'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className='flex flex-col'>

      <div className='flex justify-between'>

        <div className='flex flex-col mt-[200px] items-center mx-auto gap-[45px] text-[#484848]'>
          <LogoMotion />

          <div className='flex flex-col items-end gap-16 mr-16'>
              <p className='text-2xl w-[482px]'>با لرنیفای به صورت نامحدود و با منابع بی پایان یاد بگیرید وبه توسعه شخصی و حرفه ای خود ادامه دهید.</p>
              <p className='bg-[#339933] px-4 py-2 rounded-xl text-xl text-white relative right-56'>مشاهده دوره ها</p>
          </div>
        </div>


        <div className='relative'>
          <img className='mt-8' src='/images/header/header.png' alt='Header' />
          <div className='absolute -z-10 top-[100px] left-0'>
            <img src='/images/header/background_1_header.png' />
            <img src='/images/header/background_2_header.png' />
          </div>
        </div>


      </div>


      <Section_1 />


      <div className='flex justify-center mx-auto pb-8 pt-28 tracking-[0.5px]'><h1>از دسته بندی های زیر دوره مورد نظر خود را انتخاب کنید</h1></div>
      <Section_2 />


      <div className='bg-gradient-to-r to-[#0E9B0E] from-[#D1FF97] text-white rounded-3xl mx-[136px] mt-24  '>

        <div className='flex justify-between relative z-10'>

          <div className='flex flex-col items-start leading-4 pt-24 pb-14 pr-40 gap-6'>
            <h2 className='font-YekanBakhBold text-[40px]'>از تدریس به درآمد</h2>
            <p className='font-YekanBakhBold text-[24px]'> با اشتراک‌گذاری دانشتان در لرنیفای پاداش ببرید.</p>
            <div className='bg-[#CCAB6C] text-[24px] px-5 py-4 rounded-xl'>مشاهده شرایط</div>
          </div>

          <img className='absolute left-[110px] bottom-[100px] z-20 w-[230px] h-[215]' src='/images/home_page/elementary_school_teacher_teaching.png' alt='Elementary_School_Teacher_Teaching' />
          <img className='absolute left-[70px] top-[135px] z-30 w-[185px] h-[192px]' src='/images/home_page/man_with_headset_having_video_call.png' alt='Man_With_Headset_Having_Video_Call' />
          <img className='absolute left-[215px] top-[110px] z-10 w-[210px] h-[205px]' src='/images/home_page/medium_shot_woman_presenting.png' alt='Medium_Shot_Woman_Presenting' />

        </div>
      </div>
    </div>



  )
}
