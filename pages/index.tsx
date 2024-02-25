// @ts-nocheck
import React, { useRef } from 'react'
import { Inter } from 'next/font/google'
import LogoMotion from '@/components/user/home_page/LogoMotion';
import Services from '@/components/user/home_page/Services';
import Categories from '@/components/user/home_page/Categories';
import CourseComponent from '@/components/user/course/CourseComponent';
import Accordion from '@/components/user/home_page/Accordion';
import Best_sellers from '@/components/user/home_page/Best_sellers';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';
import Link from 'next/link';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const index = () => {




  const refCourses = useRef(null)

  const handleScrollCourses = () => {
    refCourses.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const latest_courses = [
    { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
  ];

  const { dataShowCourse } = Teaching_Fetch()

  console.log('data', dataShowCourse)


  return (
    <div>
      <Navbar />

      <div className='flex flex-col'>
        
        <div className='flex'>

          <div className='flex flex-col gap-12 [@media(max-width:500px)]:gap-6 pt-48 [@media(max-width:1277px)]:pt-24  text-[#484848] '>

            <LogoMotion />

            <div className='flex flex-col items-end [@media(max-width:925px)]:items-center gap-16 max-md:gap-8'>
              <div className='flex justify-center max-md:text-center'>
                <p className='text-2xl max-md:text-xl [@media(max-width:500px)]:text-base w-[68%]'>با لرنیفای به صورت نامحدود و با منابع بی پایان یاد بگیرید وبه توسعه شخصی و حرفه ای خود ادامه دهید.</p>
              </div>
              <div className='flex justify-center items-center bg-[#339933] py-2 cursor-pointer rounded-xl w-[150px] max-md:w-[130px] [@media(max-width:400px)]:w-[110px]'>
                <p onClick={handleScrollCourses} className='text-xl max-md:text-base [@media(max-width:500px)]:text-sm  text-white'>مشاهده دوره ها</p>
              </div>
            </div>
          </div>

          <div className='flex relative [@media(max-width:1366px)]:hidden'>
            <div className='pt-8'>
              <img src='/images/user/home_page/header/header.png' alt='Header' />
            </div>
            <div className='absolute -z-10 top-[100px] left-0'>
              <img src='/images/user/home_page/header/background_1_header.png' />
              <img src='/images/user/home_page/header/background_2_header.png' className='max-xl:hidden' />
            </div>
          </div>
        </div>

        <Services />

        <Categories refCourses={refCourses} />


        <div className='flex flex-col items-center gap-6 mb-24 mt-8'>

          <div className='flex justify-between w-[80%] h-12 [@media(max-width:504px)]:flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <Image src="/icon/user/home_page/course/thoundar.svg" alt='Thoundar' width={24} height={24} />
              <h3 className='text-[#484848] text-xl font-bold'>جدیدترین دوره‌ها</h3>
            </div>
            <Link href="/user/courses" className='flex items-center [@media(max-width:504px)]:justify-end [@media(max-width:504px)]:mb-4'>
              <h3>مشاده همه دوره ها </h3>
              <Image src="/icon/user/home_page/course/left.svg" alt='Left' width={24} height={24} />
            </Link>
          </div>

          <div className='flex flex-wrap gap-6 justify-center w-[95%] '>

            {latest_courses.map((item) => {
              return (
                <div className='w-[270px] h-[469px]'>
                  <CourseComponent  {...item} />
                </div>
              )
            })}
          </div>
        </div>

        <div className='flex justify-center mb-24'>
          <div className='flex justify-between max-2xl:justify-center bg-gradient-to-r to-[#0E9B0E] from-[#D1FF97] text-white rounded-3xl w-[78%] h-[289px]'>

            <div className='flex justify-end items-center pr-24 max-lg:pr-0'>
              <div className='flex flex-col justify-between h-[170px]w-full max-md:gap-3'>
                <div>
                  <h2 className='font-YekanBakhBold text-[40px] max-md:text-[34px] [@media(max-width:480px)]:text-[24px]'>از تدریس به درآمد</h2>
                  <p className='font-YekanBakhBold text-[24px]  max-md:text-[18px] [@media(max-width:480px)]:text-[14px]'> با اشتراک‌گذاری دانش تان در لرنیفای پاداش ببرید.</p>
                </div>
                <div className='flex justify-center items-center bg-[#CCAB6C] rounded-xl w-[37%] h-12'>
                  <p className='text-[24px] max-lg:text-[18px] [@media(max-width:480px)]:text-[14px]'>مشاهده شرایط</p>
                </div>
              </div>
            </div>

            <div className='flex flex-1 relative max-xl:hidden'>
              <div className='w-[259px] h-[245] absolute left-[110px] bottom-[85px] z-20'><img className='w-full  ' src='/elementary_school_teacher_teaching.png' alt='Elementary_School_Teacher_Teaching' /></div>
              <div className='w-[218px] h-[221px] absolute left-[70px] top-[155px] z-30'><img className='w-full ' src='/man_with_headset_having_video_call.png' alt='Man_With_Headset_Having_Video_Call' /></div>
              <div className='w-[241px] h-[236px] absolute left-[245px] top-[130px] z-10'><img className='w-full ' src='/medium_shot_woman_presenting.png' alt='Medium_Shot_Woman_Presenting' /></div>
            </div>

          </div>
        </div>


        <div className='flex flex-col items-center gap-6 my-8'>

          <div className='flex justify-between w-[80%] h-14 [@media(max-width:504px)]:flex-col  gap-2'>
            <div className='flex items-center gap-1'>
              <Image src="/icon/user/home_page/course/free.svg" alt='Free' width={24} height={24} />
              <h3 className='text-[#212121] text-xl font-bold [@media(max-width:504px)]:text-base'>آموزش‌های پرمخاطب رایگان</h3>
            </div>
            <Link href="/user/courses" className='flex items-center [@media(max-width:504px)]:mb-4 [@media(max-width:504px)]:text-sm  [@media(max-width:504px)]:justify-end '>
              <h3>مشاده همه دوره ها </h3>
              <Image src="/icon/user/home_page/course/left.svg" alt='Left' width={24} height={24} />
            </Link>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,]}
            className='w-[80%] flex h-[469px] justify-center'
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              490: {
                slidesPerView: 2,
              },
              880: {
                slidesPerView: 3
              },
              1250: {
                slidesPerView: 4,
              }
            }}
            autoplay={{ delay: 2000 }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {latest_courses.map((item) => {
              return (
                <SwiperSlide className='w-[270px] '>
                  <CourseComponent  {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>


        <Best_sellers />

        <Accordion />

      </div>


      <Footer />

    </div >

  )
}

export default index