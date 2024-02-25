import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


const LogoMotion = () => {


    useEffect(() => {
        Aos.init({ duration: 1100})
    }, [])


    return (
        <div>

            <div className='flex relative right-56 [@media(max-width:1277px)]:right-0 [@media(max-width:1277px)]:mx-8 font-YekanBakhFat text-5xl [@media(max-width:925px)]:text-3xl [@media(max-width:500px)]:hidden'>
                <div data-aos='fade-right' className='flex gap-[90px] [@media(max-width:925px)]:gap-[38px]'>
                    <h1 className='w-72 [@media(max-width:925px)]:w-48'>لحظه‌ای برای </h1>
                    <h1 className='w-72 [@media(max-width:925px)]:w-48'>تاثیری برای</h1>
                </div>
                <div data-aos='fade' data-aos-duration="2000" className='flex gap-[190px] [@media(max-width:925px)]:gap-[115px] absolute right-56 [@media(max-width:925px)]:right-[138px] text-[#339933]'>
                    <h1>یادگیری،</h1>
                    <h1>همیشه<span className='text-[#484848]'>!</span></h1>
                </div>
            </div>

            <div data-aos='fade-down' data-aos-easing="linear" className='flex justify-center font-YekanBakhFat text-2xl [@media(max-width:360px)]:text-xl [@media(min-width:500px)]:hidden'>
                <span className='text-[#484848]'>لحظه‌ای برای </span>
                <span className='text-[#008000]'>،یادگیری</span>
                <span className='text-[#484848]'>تاثیری</span>
                <span className='text-[#008000]'>برای همیشه</span>
                <span className='text-[#484848]'>!</span>
            </div>
        </div>
    )
}

export default LogoMotion