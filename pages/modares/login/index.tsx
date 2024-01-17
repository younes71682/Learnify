// @ts-nocheck
import Header_Main from '@/components/modares/home_page/Header_Main'
import Tab_layout from '@/components/modares/home_page/tab/Tab_layout'
import React, { useRef } from 'react'
import Services from '@/components/modares/home_page/Services'
import Start_teaching from '../../components/modares/link/Start_teaching'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Layout_user/Navbar'

const index = () => {
    const refstudy = useRef(null)
    const handlescrollstaudy = () => {
        refstudy.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (

        <div>
            <Navbar />
            <Header_Main handlescrollstaudy={handlescrollstaudy} />

            <Services />

            <div className='flex flex-col w-[80%] items-center justify-center mx-auto h-[900px]'>
                <h1 className='text-2xl text-[#484848] font-bold mb-16'>چگونه در لرنیفای شروع به تدریس کنیم؟</h1>
                <Tab_layout refstudy={refstudy} />
            </div>

            <Start_teaching />
            <Footer />
        </div>

    )
}

export default index