import React from 'react'
import { motion } from "framer-motion"

const Section_2 = () => {

    const informatin = [
        { id: 1, name: 'طراحی', number: '12 دوره', logo: <img src='/images/dropdown/graphic_design.png' alt='Graphic_Design' className='w-[48px]' /> },
        { id: 2, name: 'امنیت شبکه', number: '12 دوره', logo: <img src='/images/dropdown/cyber_security.png' alt='Cyber_Security' className='w-[48px]'/> },
        { id: 3, name: 'برنامه نویسی', number: '12 دوره', logo: <img src='/images/dropdown/custom_coding.png' alt='Custom_Coding' className='w-[48px]' /> },
        { id: 4, name: 'فیلم وانیمیشن', number: '12 دوره', logo: <img src='/images/dropdown/movie.png' alt='Movie' className='w-[48px]' /> },
        { id: 5, name: 'توسع وب', number: '12 دوره', logo: <img src='/images/dropdown/browser.png' alt='Browser' className='w-[48px]' /> },
        { id: 6, name: 'توسعه موبایل', number: '12 دوره', logo: <img src='/images/dropdown/mobile_coding.png' alt='Mobile_Coding' className='w-[48px]' /> },
        { id: 7, name: 'نرم افزار های مهندسی', number: '12 دوره', logo: <img src='/images/dropdown/monitor.png' alt='Monitor' className='w-[48px]' /> },
        { id: 8, name: 'نرم افزار های کاربردی', number: '12 دوره', logo: <img src='/images/dropdown/menu.png' alt='Menu' className='w-[48px]' /> },
    ]


    return (
        <div className='flex flex-wrap justify-center mx-32'>
            {informatin.map((item) => {
                return (

                    <div className='mx-12 my-8 border-solid border-[#008000] border-2 rounded-[15px] w-44 h-[108px] hover:text-white hover:shadow-[inset_0_-10rem] hover:shadow-[#008000] duration-[400ms,900ms] transition-[color,box-shadow]'>
                        <div className='flex flex-col items-center'>

                            <div className='bg-white rounded-full p-2 relative bottom-8'>{item.logo}</div>

                            <div className='flex flex-col items-center relative bottom-5'>
                                <h3 className='text-[18px]'>{item.name}</h3>
                                <p className='text-[12px] font-normal'>{item.number}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Section_2
