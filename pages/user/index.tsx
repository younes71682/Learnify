// @ts-nocheck
import { Inter } from 'next/font/google'
import React, { useRef } from 'react'
import Image from 'next/image'

import LogoMotion from '@/components/user/home_page/LogoMotion'
import Services from '@/components/user/home_page/Services'
import Categories from '@/components/user/home_page/Categories'
import Accordion from '@/components/user/home_page/Accordion'

import { url } from 'inspector'
import CourseComponent from '@/components/user/course/CourseComponent'
import Best_sellers from '@/components/user/home_page/Best_sellers'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const latest_courses = [
    { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
  ];

  const refCourses = useRef(null)
  const handleScrollCourses = () => {
    refCourses.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (

    <div>

      <Navbar />

      <div className='flex justify-between'>

        <div className='flex flex-col mt-[200px] items-center mx-auto gap-[45px] text-[#484848]'>
          <LogoMotion />

          <div className='flex flex-col items-end gap-16 mr-16  '>
            <p className='text-2xl w-[482px]'>با لرنیفای به صورت نامحدود و با منابع بی پایان یاد بگیرید وبه توسعه شخصی و حرفه ای خود ادامه دهید.</p>
            <div className='flex justify-center items-center  bg-[#339933] py-2 relative px-3 right-56 z-10 cursor-pointer rounded-xl'>
              <p onClick={handleScrollCourses} className='text-xl text-white '>مشاهده دوره ها</p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <img className='mt-8' src='/images/user/home_page/header/header.png' alt='Header' />
          <div className='absolute -z-10 top-[100px] left-0'>
            <img src='/images/user/home_page/header/background_1_header.png' />
            <img src='/images/user/home_page/header/background_2_header.png' />
          </div>
        </div>
      </div>

      <Services />

      <div ref={refCourses} className='flex justify-center mx-auto pb-8 pt-28 tracking-[0.5px] '><h1>از دسته بندی های زیر دوره مورد نظر خود را انتخاب کنید</h1></div>
      <Categories />

      <div className='flex flex-col gap-8 mb-24 mt-8'>
        <div className='flex justify-between mx-[175px]'>
          <div className='flex items-center gap-1'>
            <Image src="/icon/user/home_page/course/thoundar.svg" alt='Thoundar' width={24} height={24} />
            <h3 className='text-[#484848] text-xl font-bold'>جدیدترین دوره‌ها</h3>
          </div>
          <div className='flex items-center'>
            <h3>مشاده همه دوره ها </h3>
            <Image src="/icon/user/home_page/course/left.svg" alt='Left' width={24} height={24} />
          </div>
        </div>

        <div className='flex justify-center '>
          <div className='flex justify-around w-[80%]'>
            {latest_courses.map((item) => {
              return (
                <div className='w-[22%] h-[469px]'>
                  <CourseComponent  {...item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>


      <div className='flex justify-center mb-24'>
        <div className='flex justify-between bg-gradient-to-r to-[#0E9B0E] from-[#D1FF97] text-white rounded-3xl w-[78%] h-[289px]'>

          <div className='flex justify-end items-center w-[50%]'>
            <div className='flex flex-col justify-between h-[170px]'>
              <div>
                <h2 className='font-YekanBakhBold text-[40px]'>از تدریس به درآمد</h2>
                <p className='font-YekanBakhBold text-[24px]'> با اشتراک‌گذاری دانشتان در لرنیفای پاداش ببرید.</p>
              </div>
              <div className='flex justify-center items-center bg-[#CCAB6C] rounded-xl w-[37%] h-[48px]'><p className=' text-[24px]'>مشاهده شرایط</p></div>
            </div>
          </div>

          <div className='flex flex-1 relative'>
            <div className='w-[259px] h-[245] absolute left-[110px] bottom-[85px] z-20'><img className='w-full  ' src='/elementary_school_teacher_teaching.png' alt='Elementary_School_Teacher_Teaching' /></div>
            <div className='w-[218px] h-[221px] absolute left-[70px] top-[155px] z-30'><img className='w-full ' src='/man_with_headset_having_video_call.png' alt='Man_With_Headset_Having_Video_Call' /></div>
            <div className='w-[241px] h-[236px] absolute left-[245px] top-[130px] z-10'><img className='w-full ' src='/medium_shot_woman_presenting.png' alt='Medium_Shot_Woman_Presenting' /></div>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-8 mb-20'>

        <div className='flex justify-between mx-[175px]'>
          <div className='flex items-center gap-1'>
            <Image src="/icon/user/home_page/course/free.svg" alt='Free' width={24} height={24} />
            <h3 className='text-[#212121] text-xl font-bold'>آموزش‌های پرمخاطب رایگان</h3>
          </div>
          <div className='flex items-center'>
            <h3>مشاده همه دوره ها </h3>
            <Image src="/icon/user/home_page/course/left.svg" alt='Left' width={24} height={24} />
          </div>
        </div>

        <div className='flex justify-center '>
          <div className='flex justify-around w-[80%]'>
            {latest_courses.map((item) => {
              return (
                <div className='w-[22%] h-[469px]  '>
                  <CourseComponent  {...item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>


      <div className='flex flex-col gap-8 '>

        <div className='flex justify-center'>
          <h3 className='text-[#212121] text-2xl font-bold'>مشاده همه دوره ها </h3>
        </div>

        <Best_sellers />
      </div>

      <div className='mt-16 mb-8 flex justify-center'><h2 className='text-2xl font-bold'>پاسخ به پرسش‌های متداول</h2></div>
      <Accordion />


      <Footer />
    </div>

  )
}
