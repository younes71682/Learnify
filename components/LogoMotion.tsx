import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


const LogoMotion = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <div className='flex relative right-[-460px]' >
            <div data-aos='fade-right' className='flex gap-24 font-[900] text-5xl absolute z-10 top-0 right-0'>
                <div className='w-72 '>لحظه‌ای برای </div>
                <h1 className='w-72'>تاثیری برای</h1>
            </div>
            <div data-aos='fade' data-aos-duration="2000" className='flex gap-[200px] absolute right-56 font-[1000] text-5xl text-[#339933]'>
                <h1>یادگیری،</h1>
                <h1>همیشه!</h1>
            </div>
        </div>
    )
}

export default LogoMotion