// @ts-nocheck
import * as React from 'react'
import { useRouter } from 'next/router'
import { useRef } from 'react'

import courseData from "/components/courseData.json"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseComponent from '@/components/user/course/CourseComponent';
import Layout_User from '@/components/user/layout_user/Layout_User';

export const CourseDetail = () => {

    const Courses = [
        { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    ];

    const refComments = useRef(null)
    const handleScroll = () => {
        refComments.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refEpisodes = useRef(null)
    const handleScrollEpisodes = () => {
        refEpisodes.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refEMentor = useRef(null)
    const handleScrollMentor = () => {
        refEMentor.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const refDescription = useRef(null)
    const handleScrollDescription = () => {
        refDescription.current?.scrollIntoView({ behavior: 'smooth' })
    }


    // console.log(courseData)

    const route = useRouter()
    const routeID = route.query.id


    return (

        <Layout_User showFooter>

            <div className='pr-[134px] max-[1048px]:px-4 pl-[136px] pb-9 '>
                <h1 className='pt-[4rem] pb-[3.5rem] text-right  text-2xl font-bold leading-4'>آموزش {courseData.course.title}</h1>

                {/* CourseDetail div */}
                <div className='flex justify-between flex-wrap gap-1 max-[1418px]:justify-center'>
                    {/* right section div */}
                    <div className='w-[770px]  '>
                        <div className='flex rounded-lg border-[3px] border-[#008000] bg-white p-4 justify-around py-[35px] text-black text-opacity-80 text-center text-lg font-bold leading-4'>
                            <p className='cursor-pointer' onClick={handleScrollDescription}>معرفی دوره</p>
                            <p className='cursor-pointer' onClick={handleScrollMentor}>درباره استاد</p>
                            <p className='cursor-pointer' onClick={handleScrollEpisodes}>سرفصل های دوره</p>
                            <p className='cursor-pointer' onClick={handleScroll}>کامنت ها</p>
                        </div>
                        <div ref={refDescription} className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
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
                        <div ref={refEMentor} className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9999 10.9998C13.2867 10.9998 14.3299 9.95662 14.3299 8.6698C14.3299 7.38298 13.2867 6.33984 11.9999 6.33984C10.7131 6.33984 9.66992 7.38298 9.66992 8.6698C9.66992 9.95662 10.7131 10.9998 11.9999 10.9998Z" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 16.6594C16 14.8594 14.21 13.3994 12 13.3994C9.79 13.3994 8 14.8594 8 16.6594" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='mr-1 text-lg font-bold text-[#484848]'>درباره استاد</p>
                            </div>
                            <div className=' sm:flex mb-4 pt-6'>
                                <img src="/images/mentor.png" alt="" />
                                <div className='mr-2'>
                                    <p className='font-bold text-base'>سمیه مهاجری نسب پاریزی</p>
                                    <p className='font-normal text-sm mt-[5px]'>مدرس طراحی گرافیکی</p>
                                    <p className='mt-[15px] font-medium text-sm'>از سال ۱۳۸۳ در تمامی مقاطع طراحی گرافیکی سابقه تدریس داشته و کارت رسمی مربیگری و مدیریت آموزشی خود را از سازمان فنی و حرفه‌ای کشور دریافت کرده‌اند. همچنین ایشان، مولف کتب و جزوات آموزشی، طراح گرافیک و پادکستر نیز هستند.</p>
                                </div>
                            </div>
                        </div>
                        <div ref={refEpisodes} className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.6602 10.4395L20.6802 14.6195C19.8402 18.2295 18.1802 19.6895 15.0602 19.3895C14.5602 19.3495 14.0202 19.2595 13.4402 19.1195L11.7602 18.7195C7.59018 17.7295 6.30018 15.6695 7.28018 11.4895L8.26018 7.29952C8.46018 6.44952 8.70018 5.70952 9.00018 5.09952C10.1702 2.67952 12.1602 2.02952 15.5002 2.81952L17.1702 3.20952C21.3602 4.18952 22.6402 6.25952 21.6602 10.4395Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.0603 19.3896C14.4403 19.8096 13.6603 20.1596 12.7103 20.4696L11.1303 20.9896C7.16034 22.2696 5.07034 21.1996 3.78034 17.2296L2.50034 13.2796C1.22034 9.30961 2.28034 7.20961 6.25034 5.92961L7.83034 5.40961C8.24034 5.27961 8.63034 5.16961 9.00034 5.09961C8.70034 5.70961 8.46034 6.44961 8.26034 7.29961L7.28034 11.4896C6.30034 15.6696 7.59034 17.7296 11.7603 18.7196L13.4403 19.1196C14.0203 19.2596 14.5603 19.3496 15.0603 19.3896Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.6396 8.53027L17.4896 9.76027" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.6602 12.4004L14.5602 13.1404" stroke="#339933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='font-bold text-xl text-[#484848] mr-1 '>سر فصل های دوره</p>
                            </div>
                            {courseData.course.chapters.map((item, i) => {
                                return (
                                    <Accordion className='my-4 border-0 rounded-lg p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] '>

                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className='font-YekanBakhRegular font-bold text-lg' >
                                                <div className='flex'>
                                                    <div className='ml-6'>{i + 1}</div>
                                                    <div>{item.title}</div>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {item.lessons.map((item, i) => {
                                                return (
                                                    <Typography className='my-2  font-YekanBakhRegular shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  font-bold text-sm w-[92%] flex items-center h-[65px] mx-auto'>
                                                        <div className='flex '>
                                                            <div className='mx-6'>{i + 1}</div>
                                                            <div>{item.title}</div>
                                                        </div>
                                                    </Typography>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}

                        </div>
                        <div ref={refComments} className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.4955 13.25H13.5045" stroke="#339933" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.9955 13.25H10.0045" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.4955 13.25H6.5045" stroke="#339933" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className='text-xl font-bold text-[#484848] mr-1'>نظرات</p>
                                    <p className='text-[#484848] mr-1'>(120)</p>
                                </div>
                            </div>
                            <div className='bg-[#F8F8F8] rounded-2xl mt-4 px-4 py-2'>
                                <div className='flex items-center  justify-between'>
                                    <div className='text-[#545454] text-sm  '>
                                        <div>مرتضی</div>
                                        <div>1403/7/2</div>
                                    </div>
                                    <div className='flex rounded-md border-2 px-1 h-[18px] border-[#158212]'>
                                        <span className='text-[#158212] text-xs relative top-[2px]'>4.7</span>
                                        <span className='flex items-center'>
                                            <svg className='flex items-center' xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                <path d="M6.86447 1.4701L7.74447 2.94441C7.86447 3.14964 8.18447 3.3465 8.45447 3.38419L10.0495 3.60618C11.0695 3.74858 11.3095 4.36846 10.5745 4.97996L9.33447 6.01868C9.12447 6.19459 9.00947 6.53385 9.07447 6.77678L9.42947 8.06261C9.70947 9.08039 9.06447 9.4741 7.98947 8.94217L6.49447 8.20083C6.22447 8.0668 5.77947 8.0668 5.50447 8.20083L4.00947 8.94217C2.93947 9.4741 2.28947 9.0762 2.56947 8.06261L2.92447 6.77678C2.98947 6.53385 2.87447 6.19459 2.66447 6.01868L1.42447 4.97996C0.694466 4.36846 0.929466 3.74858 1.94947 3.60618L3.54447 3.38419C3.80947 3.3465 4.12947 3.14964 4.24947 2.94441L5.12947 1.4701C5.60947 0.670122 6.38947 0.670122 6.86447 1.4701Z" fill="#008000" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <p className='mt-4'>
                                    خیلی راضی بودم از کار ایشون، بسیار از پایه می گفتن و بیان شیوایی هم داشتن.
                                </p>
                                <div className='mt-7 p-4 mr-12 w-fit border rounded-lg text-sm border-black '>
                                    همراه عزیز؛ از اینکه نظر خود را با ما در میان گذاشتید صمیمانه سپاسگزاریم.
                                </div>
                            </div>
                        </div>
                        <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                            <div className='flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z" stroke="#D10000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.94043 19.0804L19.0804 4.94043" stroke="#D10000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='text-xl font-bold text-[#D10000] mr-1'>گزارش</p>
                            </div>
                            <input type="text" className='mt-3' style={{ width: '60%', borderRadius: "6px" }} placeholder='لطفاً هر مشکل، نظر یا پیشنهادی که دارید را با ما به اشتراک بگذارید' />
                        </div>
                    </div>
                    {/* left section div */}
                    <div className='w-[374px] '>
                        <div className='border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] border-blue-500'>
                            <div>
                                <img className='w-[fit]' src="/images/videoSample.png" alt="" />
                            </div>
                            <div className='px-4 font-bold text-sm'>
                                <p className='pt-[2rem]  pb-[3.5rem] text-right  text-2xl font-bold leading-4'>آموزش {courseData.course.title}</p>
                                <div className='flex my-4  justify-between'>
                                    <div>تعداد فصل</div>
                                    <div className='font-normal text-[#494949]'>5</div>
                                </div>
                                <div className='flex my-4 justify-between'>
                                    <div>تعداد درس</div>
                                    <div className='font-normal text-[#494949]'>3</div>
                                </div>
                                <div className='flex my-4 justify-between'>
                                    <div>مدت زمان ویدیو آموزشی</div>
                                    <div className='font-normal text-[#494949]'>5 ساعت و 30 دقیقه</div>
                                </div>

                                <div className='flex mt-8 justify-between'>
                                    <div className='text-base'>هزینه آموزش</div>
                                    <div className='font-bold text-xl text-[#393] '>2,690,000 تومان</div>
                                </div>
                            </div>
                            <div className='border text-center text-[#393] text-xl font-bold py-3 mt-5'>افزودن به سبد خرید</div>
                        </div>
                    </div>
                    {/* other courses from this mentor div */}
                </div >
                <div className='mt-12'>
                    <p className='text-xl mb-6 font-bold'>دوره های دیگر مدرس</p>
                    <div className='flex flex-wrap  bg-[#FBFBFB]  justify-start gap-6'>
                        {Courses.map((item) => (
                            <div key={item.id}>
                                <CourseComponent
                                    {...item}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </Layout_User>
    )
}

export default CourseDetail