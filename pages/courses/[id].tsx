import React from 'react'
import { useRouter } from 'next/router'
import courseData from '../api/course/courseData.json'

export const CourseDetail = () => {


    const { id, title, description, image, teaser, chapters, category, Price, status, created_at, updated_at } = courseData.Course;


    const route = useRouter()
    const routeID = route.query.id
    return (
        <div className='pr-[134px] pl-[136px] pb-9 '>
            <h1 className='pt-[4rem] pb-[3.5rem] text-right  text-2xl font-bold leading-4'>آموزش {title}</h1>

            {/* CourseDetail div */}
            <div className='flex justify-between '>
                {/* right section div */}
                <div className='w-[770px]  '>
                    <div className='flex rounded-lg border-[3px] border-[#008000] bg-white p-4 justify-around py-[35px] text-black text-opacity-80 text-center text-lg font-bold leading-4'>
                        <p>معرفی دوره</p>
                        <p>درباره استاد</p>
                        <p>سرفصل های دوره</p>
                        <p>کامنت ها</p>
                    </div>
                    <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                        <div className='flex items-center pt-3 pb-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 8H17" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 13H13" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-lg font-bold leading-4 text-[#484848] pr-1 '>معرفی دوره </p>
                        </div>
                        <p className=''>در دوره پیشرفته می‌خواهیم نیرو های حرفه ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
                            دوره آموزش پیشرفته وردپرس قدم دوم از مسیریادگیری آموزش وردپرس  است که اگر شما قصد یادگیری وردپرس را دارید نیاز است که این قدم را ، به شکل کامل و دقیق مشاهده کنید</p>
                        <p className='text-sm font-bold mt-8'>چرا به دوره پیشرفته وردپرس نیاز داریم؟</p>
                        <p className='my-2'>در دوره پیشرفته می‌خواهیم نیرو های حرفه ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
                            دوره آموزش پیشرفته وردپرس قدم دوم از مسیریادگیری آموزش وردپرس  است که اگر شما قصد یادگیری وردپرس را دارید نیاز است که این قدم را ، به شکل کامل و دقیق مشاهده کنید.

                            چرا به دوره پیشرفته وردپرس نیاز داریم؟
                            وردپرس یک سیستم مدیریت محتوای حرفه‌ای‌ست که برای مدت طولانی در مارکت‌های داخلی و خارجی انتخاب مشتریان و طراحان سایت بوده است. قالب ها و پلاگین های جذاب و توسعه دهندگان حرفه‌ای در سراسر جهان این سیستم مدیریت محتوا را محبوب‌تر از همیشه کرده‌اند.
                            مسئله‌ای که هر طراح سایت وردپرسی باید بداند این است

                        </p>
                    </div>
                    <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9999 10.9998C13.2867 10.9998 14.3299 9.95662 14.3299 8.6698C14.3299 7.38298 13.2867 6.33984 11.9999 6.33984C10.7131 6.33984 9.66992 7.38298 9.66992 8.6698C9.66992 9.95662 10.7131 10.9998 11.9999 10.9998Z" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 16.6594C16 14.8594 14.21 13.3994 12 13.3994C9.79 13.3994 8 14.8594 8 16.6594" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='mr-1 text-lg font-bold text-[#484848]'>درباره استاد</p>
                        </div>
                    </div>
                </div>
                {/* left section div */}
                <div className='w-[374px] border border-red-500'>
                    left sec
                </div>
            </div>
            {/* other courses from this mentor div */}
            <div>

            </div>
        </div>
    )
}

export default CourseDetail