import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


const LogoMotion = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <div className='flex relative right-32 justify-center mx-auto font-YekanBakhFat text-5xl' >
            <div data-aos='fade-right' className='flex gap-[90px] '>
                <div className='w-72 '>لحظه‌ای برای </div>
                <h1 className='w-72'>تاثیری برای</h1>
            </div>
            <div data-aos='fade' data-aos-duration="2000" className='flex gap-[190px] absolute right-56 text-[#339933]'>
                <h1>یادگیری،</h1>
                <h1>همیشه<span className='text-[#484848]'>!</span></h1>
            </div>
        </div>
    )
}

export default LogoMotion