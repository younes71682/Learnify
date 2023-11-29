import React from 'react'
import { motion } from "framer-motion"

const Section_2 = () => {

    const informatin = [
        { id: 1, name: 'طراحی', number: '12 دوره', logo: <img src='/images/dropdown/graphic_design.png' className='w-[48px]' /> },
        { id: 2, name: 'امنیت شبکه', number: '12 دوره', logo: <img src='/images/dropdown/cyber_security.png' className='w-[48px]' /> },
        { id: 3, name: 'برنامه نویسی', number: '12 دوره', logo: <img src='/images/dropdown/custom_coding.png' className='w-[48px]' /> },
        { id: 4, name: 'فیلم وانیمیشن', number: '12 دوره', logo: <img src='/images/dropdown/movie.png' className='w-[48px]' /> },
        { id: 5, name: 'توسع وب', number: '12 دوره', logo: <img src='/images/dropdown/browser.png' className='w-[48px]' /> },
        { id: 6, name: 'توسعه موبایل', number: '12 دوره', logo: <img src='/images/dropdown/mobile_coding.png' className='w-[48px]' /> },
        { id: 7, name: 'نرم افزار های مهندسی', number: '12 دوره', logo: <img src='/images/dropdown/monitor.png' className='w-[48px]' /> },
        { id: 8, name: 'نرم افزار های کاربردی', number: '12 دوره', logo: <img src='/images/dropdown/menu.png' className='w-[48px]' /> },
    ]


    return (
        <div className='flex flex-wrap justify-center mx-auto'>
            {informatin.map((item) => {
                return (

                    <div className='mx-16 my-8 border-solid border-2 border-[#008000] rounded-[15px] w-44 h-[108px] hover:bg-[#008000] hover:text-white'>
                        <div className='flex flex-col justify-between items-center relative bottom-8 gap-3'>
                            <div className=' bg-white rounded-full p-2'>{item.logo}</div>

                            <div className='flex flex-col items-center gap-2 rounded-[20px]'>
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
