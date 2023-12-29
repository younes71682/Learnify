import Header_Main from '@/components/modares/home_page/Header_Main'
import Layout from '@/components/modares/layout_modares/Layout'
import Tab_layout from '@/components/modares/home_page/tab/Tab_layout'
import React, { useRef } from 'react'
import Services from '@/components/modares/home_page/Services'
import Start_teaching from '../../components/modares/link/Start_teaching'

const index = () => {
  const refstudy = useRef(null)
  const handlescrollstaudy = () => {
    refstudy.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout showFooter>

      <div className='h-[1900px]'>
        <Header_Main handlescrollstaudy={handlescrollstaudy} />

        <Services />

        <div className='flex flex-col w-[80%] items-center justify-center mx-auto h-[900px]'>
          <h1 className='text-2xl text-[#484848] font-bold mb-16'>چگونه در لرنیفای شروع به تدریس کنیم؟</h1>
          <Tab_layout refstudy={refstudy} />
        </div>

        <Start_teaching />
      </div>
    </Layout>

  )
}

export default index
