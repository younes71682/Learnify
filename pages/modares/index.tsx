import Header_Main from '@/components/modares/home_page/Header_Main'
import Layout from '@/components/modares/layout_modares/Layout'
import Tab_layout from '@/components/modares/home_page/tab/Tab_layout'
import React from 'react'

const index = () => {
  return (
    <Layout showFooter>
      
      <div>

        <Header_Main />

        <Tab_layout />
      </div>
    </Layout>

  )
}

export default index
