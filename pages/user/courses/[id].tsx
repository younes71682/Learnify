// @ts-nocheck
import * as React from 'react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseComponent from '@/components/user/course/CourseComponent';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Course_Fetch from '@/components/api/user/Course_Fetch';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '@/components/Redux/BasketSlice';
import Link from 'next/link';
import Image from 'next/image';
import { CircleLoader } from 'react-spinners';

export const CourseDetail = () => {

    const router = useRouter()
    const { id } = router.query
    const courseId = id

    const { data_show_CourseId, pending_show_CourseId } = Course_Fetch('', courseId)

    console.log('course:', data_show_CourseId)
    const chapter_count = data_show_CourseId?.data.data.chapter_count
    const lesson_count = data_show_CourseId?.data.data.lesson_count

    const description = data_show_CourseId?.data.data.course.description
    const title = data_show_CourseId?.data.data.course.title
    const price = data_show_CourseId?.data.data.course.price
    const mentorName = data_show_CourseId?.data.data.mentor.name
    const mentorfamily = data_show_CourseId?.data.data.mentor.family
    const image = data_show_CourseId?.data.data.course.image?.media[0].original_url

    const dataCart = { courseId, title, price, mentorName, mentorfamily, description, image }



    const text_description = description?.split(('\n').localeCompare((srt) => <p>{srt}</p>))

    const Courses = [
        { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    ];


    const titleHeader = [
        { title: 'معرفی دوره' },
        { title: 'درباره استاد' },
        { title: 'سرفصل های دوره ' },
        { title: 'کامنت ها' },
    ]

    const titleRef = titleHeader.map(() => useRef(null))

    const handelButtonClick = (index) => {
        titleRef[index].current?.scrollIntoView({ behavior: 'smooth' })
        titleRef[index].current.style.color = '#008000'; // تغییر استایل دلخواه
        console.log('fg', titleRef)
    }

    const dispatch = useDispatch()
    const handelAdd = (dataCart) => {
        dispatch(ADD(dataCart))
    }

    const openVideo = (url) => {
        window.open(url, '_blank'); // Open the video URL in a new tab/window
    };


    return (
        <div>
            {pending_show_CourseId ?

                < div className='flex justify-center items-center h-[100vh]'>
                    <CircleLoader color="#36d7b7" />
                </div>

                :
                <div>

                    <Navbar />

                    <div className='pt-24'>

                        <div className='flex flex-col items-center'>

                            <div className='flex flex-1 w-[77%] justify-start pb-12 max-xl:justify-center '>
                                <h1 className='text-2xl font-bold leading-4'>{title}</h1>
                            </div>

                            <div className='flex justify-between gap-3 flex-wrap w-[77%] max-xl:justify-center '>

                                <div className='w-[66%] max-xl:w-[90%]'>

                                    <div className='flex flex-wrap rounded-lg border-[3px] border-[#008000] bg-white p-4 justify-around items-center py-7 gap-2 text-center '>
                                        {titleHeader.map((item, index) => (
                                            <p key={index} ref={titleRef[index]} className='text-black text-opacity-80 cursor-pointer text-lg font-bold w-[130px]' onClick={() => handelButtonClick(index)}>{item.title}</p>
                                        ))}
                                    </div>

                                    <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>

                                        <div className='flex items-center pt-3 pb-5'>
                                            <Image src="/icon/user/coursesId/courseIntroduction.svg" alt='courseIntroduction' width={24} height={24} />
                                            <p className='text-lg font-bold leading-4 text-[#484848] pr-1 '>معرفی دوره </p>
                                        </div>
                                        <p>{text_description}</p>
                                    </div>

                                    <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                                        <div className='flex items-center'>
                                            <Image src="/icon/user/coursesId/aboutTeacher.svg" alt='aboutTeacher' width={24} height={24} />
                                            <p className='mr-1 text-lg font-bold text-[#484848]'>درباره استاد</p>
                                        </div>

                                        <div className=' sm:flex mb-4 pt-6'>
                                            <img src="/images/mentor.png" alt="" />
                                            <div className='mr-2'>
                                                <p className='font-bold text-base'>{mentorName}{mentorfamily}</p>
                                                <p className='font-normal text-sm mt-[5px]'>مدرس طراحی گرافیکی</p>
                                                <p className='mt-[15px] font-medium text-sm'>از سال ۱۳۸۳ در تمامی مقاطع طراحی گرافیکی سابقه تدریس داشته و کارت رسمی مربیگری و مدیریت آموزشی خود را از سازمان فنی و حرفه‌ای کشور دریافت کرده‌اند. همچنین ایشان، مولف کتب و جزوات آموزشی، طراح گرافیک و پادکستر نیز هستند.</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                                        <div className='flex items-center'>

                                            <Image src="/icon/user/coursesId/headSeasons.svg" alt='headSeasons' width={24} height={24} />
                                            <p className='font-bold text-xl text-[#484848] mr-1 '>سر فصل های دوره</p>
                                        </div>
                                        {data_show_CourseId?.data.data.course.chapters.map((item, i) => {
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
                                                                <Typography sx={{ my: '10px' }} className='   font-YekanBakhRegular shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  font-bold text-sm w-[92%] flex items-center h-[65px] mx-auto'>
                                                                    <div className='flex justify-between  w-full my-2 px-2'>
                                                                        <div className='mx-6'>{i + 1}</div>
                                                                        <p className='font-YekanBakhRegular font-bold'>{item.title}</p>
                                                                        <div onClick={() => openVideo(item.video.media[0].original_url)} className='flex cursor-pointer justify-between items-center gap-1'>
                                                                            <p className='font-YekanBakhRegular text-[#008000] font-bold'>مشاهده</p>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                                <path d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z" stroke="#008000" stroke-linecap="round" stroke-linejoin="round" />
                                                                                <path d="M7.9999 13.5138C10.3532 13.5138 12.5466 12.1271 14.0732 9.72714C14.6732 8.78714 14.6732 7.20714 14.0732 6.26714C12.5466 3.86714 10.3532 2.48047 7.9999 2.48047C5.64656 2.48047 3.45323 3.86714 1.92656 6.26714C1.32656 7.20714 1.32656 8.78714 1.92656 9.72714C3.45323 12.1271 5.64656 13.5138 7.9999 13.5138Z" stroke="#008000" stroke-linecap="round" stroke-linejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </Typography>
                                                            )
                                                        })}
                                                    </AccordionDetails>
                                                </Accordion>
                                            )
                                        })}

                                    </div>
                                    <div className='my-4 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] p-4'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <Image src="/icon/user/coursesId/comments.svg" alt='comments' width={24} height={24} />

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

                                <div className='w-[32%]  max-xl:w-[80%]'>
                                    <div className='border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] max-xl:flex justify-between max-md:flex-col'>

                                        <div className='flex'>
                                            <video controls className='w-full rounded-xl' src="https://www.learnify.v1r.ir/public/storage/5/testCourse.mp4" alt="" />
                                        </div>

                                        <div className='flex flex-col flex-1 gap-8'>

                                            <div className='flex flex-col px-4 font-bold text-sm gap-4'>

                                                <div className='flex pt-14 pb-4'>
                                                    <p className='text-right text-2xl font-bold leading-4'>{title}</p>
                                                </div>

                                                <div className='flex justify-between'>
                                                    <h2>تعداد فصل</h2>
                                                    <p className='font-normal text-[#494949]'>{chapter_count}</p>
                                                </div>

                                                <div className='flex justify-between'>
                                                    <h2>تعداد درس</h2>
                                                    <p className='font-normal text-[#494949]'>{lesson_count}</p>
                                                </div>

                                                <div className='flex justify-between'>
                                                    <h2>مدت زمان ویدیو آموزشی</h2>
                                                    <p className='font-normal text-[#494949]'>5 ساعت و 30 دقیقه</p>
                                                </div>

                                                <div className='flex justify-between pt-6'>
                                                    <h2 className='text-base'>هزینه آموزش</h2>
                                                    <p className='font-bold text-xl text-[#393] font-Byekan '>{price}</p>
                                                </div>
                                            </div>
                                            <div onClick={() => handelAdd(dataCart)} className='flex justify-center border-t text-center text-[#393] text-xl font-bold py-3 cursor-pointer'>
                                                <Link href='/user/cart'>افزودن به سبد خرید</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div >
                        </div >

                        <div className='flex flex-col items-center pt-14'>

                            <div className='flex justify-start w-[77%] pt-4 max-xl:justify-center'>
                                <p className='text-xl mb-6 font-bold'>دوره های دیگر مدرس</p>
                            </div>

                            <div className='flex flex-wrap gap-6 justify-center w-[90%] mb-20'>

                                {Courses.map((item) => {
                                    return (
                                        <div className='w-[270px] h-[469px]'>
                                            <CourseComponent  {...item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                    <Footer />
                </div>
            }
        </div >
    )
}

export default CourseDetail