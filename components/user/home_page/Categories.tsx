import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch'
import Link from 'next/link'
import React from 'react'

type Category = {
    category_id: number,
    category: string,
    course_count: number
}

const Categories = (props) => {

    const { refCourses } = props

    const { dataCategory, mutate_CourseCategory, pending_CourseCategoty, } = Teaching_Fetch()
    const Category = dataCategory?.data.categories

    // const informatin = [
    //     { id: 1, name: 'طراحی', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/graphic_design.png' alt='Graphic_Design' className='w-[48px]' /> },
    //     { id: 2, name: 'امنیت شبکه', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/cyber_security.png' alt='Cyber_Security' className='w-[48px]' /> },
    //     { id: 3, name: 'برنامه نویسی', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/custom_coding.png' alt='Custom_Coding' className='w-[48px]' /> },
    //     { id: 4, name: 'فیلم وانیمیشن', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/movie.png' alt='Movie' className='w-[48px]' /> },
    //     { id: 5, name: 'توسع وب', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/browser.png' alt='Browser' className='w-[48px]' /> },
    //     { id: 6, name: 'توسعه موبایل', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/mobile_coding.png' alt='Mobile_Coding' className='w-[48px]' /> },
    //     { id: 7, name: 'نرم افزار های مهندسی', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/monitor.png' alt='Monitor' className='w-[48px]' /> },
    //     { id: 8, name: 'نرم افزار های کاربردی', number: '12 دوره', logo: <img src='/images/user/home_page/dropdown/menu.png' alt='Menu' className='w-[48px]' /> },
    // ]


    return (
        <div className='flex flex-wrap justify-center'>

            <div ref={refCourses} className='flex justify-center pb-10 pt-28 tracking-[0.5px] text-center mx-2'><h1>از دسته بندی های زیر دوره مورد نظر خود را انتخاب کنید</h1></div>

            <div className='flex flex-wrap justify-center w-[80%]'>
                {Category?.map((item: Category, index: number) => {
                    return (
                        <Link href={`/user/courses`} key={item.category_id} className='m-10 max-sm:m-5 border-solid border-[#008000] border-2 rounded-[15px] w-44 h-[108px] hover:text-white hover:shadow-[inset_0_-10rem] hover:shadow-[#008000] duration-[700ms,700ms] transition-[color,box-shadow]'>
                            <div className='flex flex-col items-center'>
                                <div className='bg-white rounded-full p-2 relative bottom-8 w-14 '>
                                    {index === 0 && <img src='/images/user/home_page/dropdown/graphic_design.png' alt='Graphic_Design' />}
                                    {index === 1 && <img src='/images/user/home_page/dropdown/browser.png' alt='Browser' />}
                                    {index === 2 && <img src='/images/user/home_page/dropdown/cyber_security.png' alt='Cyber_SSecurity' />}
                                    {index === 3 && <img src='/images/user/home_page/dropdown/monitor.png' alt='Monitor' />}
                                    {index === 4 && <img src='/images/user/home_page/dropdown/mobile_coding.png' alt='Mobile_Coding' />}
                                    {index === 5 && <img src='/images/user/home_page/dropdown/custom_coding.png' alt='Custom_Coding' />}
                                    {index === 6 && <img src='/images/user/home_page/dropdown/menu.png' alt='Meno' />}
                                    {index === 7 && <img src='/images/user/home_page/dropdown/movie.png' alt='Movie' />}
                                </div>
                                <div className='flex flex-col items-center cursor-pointer relative bottom-5'>
                                    <h3 className='text-[18px]'>{item.category}</h3>
                                    <p className='text-[12px] font-normal'>{item.course_count}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
