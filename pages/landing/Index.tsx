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


      <div className='flex justify-center mx-auto pb-11 pt-28 font-[500] tracking-widest	'><h1>از دسته بندی های زیر دوره مورد نظر خود را انتخاب کنید</h1></div>
      <Section_2 />

      <div className='w-[1168] h-[289] bg-gradient-to-r to-[#0E9B0E] from-[#D1FF97] text-white rounded-3xl mx-16  '>

        <div className='flex justify-between py-16 relative z-10 p-14'>

          <div className='flex flex-col items-start'>
            <h2 className='font-YekanBakhBold text-[40px]'>از تدریس به درآمد</h2>
            <p className='font-YekanBakhBold text-[24px]'> با اشتراک‌گذاری دانشتان در لرنیفای پاداش ببرید.</p>
            <div className='bg-[#CCAB6C] text-2xl py-3 px-4 rounded-xl'>مشاهده شرایط</div>
          </div>

           <img className='absolute left-[115px] bottom-[100px] z-20 w-[243px] h-[229]' src='/images/home_page/elementary_school_teacher_teaching.png' alt='Elementary_School_Teacher_Teaching' />
          <img className='absolute left-[76px] top-[135px] z-30 w-[202px] h-[205px]' src='/images/home_page/man_with_headset_having_video_call.png' alt='Man_With_Headset_Having_Video_Call' />
          <img className='absolute left-[236px] top-[120px] z-10 w-[225px] h-[220px]' src='/images/home_page/medium_shot_woman_presenting.png' alt='Medium_Shot_Woman_Presenting' />
 
        </div>
      </div>
    </div>

  )
}

export default index
