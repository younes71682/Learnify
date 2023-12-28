import React, { useRef } from 'react'
import Layout_Main from '@/components/layout_main/Layout_Main';
import { Inter } from 'next/font/google'
import LogoMotion from '@/components/user/home_page/LogoMotion';
import Services from '@/components/user/home_page/Services';
import Categories from '@/components/user/home_page/Categories';
import CourseComponent from '@/components/user/course/CourseComponent';
import Accordion from '@/components/user/home_page/Accordion';
import Best_sellers from '@/components/user/home_page/Best_sellers';
import Image from 'next/image';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {


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



  return (
    <Layout_Main showFooter>

      <div className='flex flex-col'>

        <div className='flex justify-between'>

          <div className='flex flex-col mt-[200px] items-center mx-auto gap-[45px] text-[#484848]'>
            <LogoMotion />

            <div className='flex flex-col items-end gap-16 mr-16 '>
              <p className='text-2xl w-[482px]'>با لرنیفای به صورت نامحدود و با منابع بی پایان یاد بگیرید وبه توسعه شخصی و حرفه ای خود ادامه دهید.</p>
              <p onClick={handleScrollCourses} className='bg-[#339933] z-10 px-4 py-2 cursor-pointer rounded-xl text-xl text-white relative right-56'>مشاهده دوره ها</p>
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

        <div ref={refCourses} className='flex justify-center mx-auto pb-8 pt-28 tracking-[0.5px]'><h1>از دسته بندی های زیر دوره مورد نظر خود را انتخاب کنید</h1></div>
        <div >
          <Categories />

        </div>

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

          <div className='flex justify-center gap-6'>
            {latest_courses.map((item) => {
              return (
                <div className=''>
                  <CourseComponent  {...item} />
                </div>
              )
            })}
          </div>
        </div>


        <div className='bg-gradient-to-r to-[#0E9B0E] from-[#D1FF97] text-white rounded-3xl mx-[175px] mb-32 '>
          <div className='flex justify-between relative z-10'>

            <div className='flex flex-col items-start leading-4 pt-24 pb-14 pr-40 gap-6'>
              <h2 className='font-YekanBakhBold text-[40px]'>از تدریس به درآمد</h2>
              <p className='font-YekanBakhBold text-[24px]'> با اشتراک‌گذاری دانشتان در لرنیفای پاداش ببرید.</p>
              <div className='bg-[#CCAB6C] text-[24px] px-5 py-4 rounded-xl'>مشاهده شرایط</div>
            </div>

            <img className='absolute left-[110px] bottom-[100px] z-20 w-[230px] h-[215]' src='/images/user/home_page/teaching/elementary_school_teacher_teaching.png' alt='Elementary_School_Teacher_Teaching' />
            <img className='absolute left-[70px] top-[135px] z-30 w-[185px] h-[192px]' src='/images/user/home_page/teaching/man_with_headset_having_video_call.png' alt='Man_With_Headset_Having_Video_Call' />
            <img className='absolute left-[215px] top-[110px] z-10 w-[210px] h-[205px]' src='/images/user/home_page/teaching/medium_shot_woman_presenting.png' alt='Medium_Shot_Woman_Presenting' />

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

          <div className='flex justify-center gap-6'>
            {latest_courses.map((item) => {
              return (
                <div className=''>
                  <CourseComponent  {...item} />
                </div>
              )
            })}
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
      </div>


    </Layout_Main>

  )
}
