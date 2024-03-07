import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


const LogoMotion = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <div className='flex relative'>
            <div className='flex gap-1 w-max font-YekanBakhFat text-5xl relative right-28 [@media(max-width:910px)]:right-0 max-md:text-4xl max-sm:text-3xl [@media(max-width:460px)]:text-lg '>
                <p data-aos='fade-right' className='text-[#484848]'>لحظه‌ای برای </p>
                <p data-aos='fade' data-aos-duration="2000" className='text-[#008000]'>،یادگیری</p>
                <p data-aos='fade-right' className='text-[#484848]'>تاثیری</p>
                <p data-aos='fade' data-aos-duration="2000" className='text-[#008000]'>برای همیشه</p>
                <p data-aos='fade' data-aos-duration="2000" className='text-[#484848]'>!</p>
            </div>
        </div>
    )
}

export default LogoMotion



