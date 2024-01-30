//@ts-nocheck
import Pagination from '@/components/api/Pagination';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CourseComponent from '@/components/user/course/CourseComponent';
import Sidebarfilter from '@/components/user/course/Sidebarfilter'
import React, { useState } from 'react'

export default function courses() {

    const Courses = [
        { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 5, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 6, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 7, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 8, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    ];

    const [pageparams, setPageParams] = useState({
        page: 1
    })

    console.log(pageparams)

    const { data, totalItem } = Pagination(pageparams)

    console.log('data', data)
    return (

        <div>
            <Navbar />
            <div className='flex justify-center gap-6 '>

                <div className='flex flex-col w-[18%] h-[730px] my-20'>

                    <div>
                        <h3 className='text-[#484848] text-[24px] font-bold leading-[27.5px] '>دوره های آموزشی برنامه نویسی</h3>
                        <h3 className='text-[#858585] text-[16px] font-medium leading-[27.5px]'>دوره ببین، تمرین کن، پیشرفت کن</h3>
                    </div>
                    <Sidebarfilter />
                </div>

                <div className='flex items-end flex-wrap gap-6 w-[64%] my-36'>
                    <span>to:{data?.data.to}</span>
                    <button onClick={() => setPageParams({ page: pageparams.page + 1 })}>gg</button>
                    {data?.data?.data.map((item) => (
                        <div className='w-[274px] h-[469px]'>
                            <CourseComponent
                                {...item}
                            />
                        </div>

                    ))}
                </div>

                {/* {data?.map((i) => {
                    return (
                        <div>
                            v
                            {i.title}
                        </div>
                    )
                })} */}

            </div>

            <Footer />
        </div >
    )

}
