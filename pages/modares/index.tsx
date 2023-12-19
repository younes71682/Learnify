import Header_Main from '@/components/modares/home_page/Header_Main'
import Layout from '@/components/modares/layout_modares/Layout'
import Tab_layout from '@/components/modares/home_page/tab/Tab_layout'
import React from 'react'
import Services from '@/components/modares/home_page/Services'
import Start_teaching from './link/Start_teaching'
 
const index = () => {
  return (
    <Layout showFooter>

      <div>
        <Header_Main />

        <Services />

        <div className='flex flex-col w-[80%] items-center mx-auto mt-28'>
          <h1 className='text-2xl text-[#484848] font-bold mb-16'>چگونه در لرنیفای شروع به تدریس کنیم؟</h1>
          <Tab_layout />
        </div>

        <Start_teaching/> 
      </div>
    </Layout>

  )
}

export default index
