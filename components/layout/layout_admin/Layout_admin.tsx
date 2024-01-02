import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

type Propscontainer = {

    children: React.ReactNode
}

const Layout_admin = ({ children }: Propscontainer) => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex justify-center gap-6 pt-28 h-[180vh]'>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default Layout_admin
