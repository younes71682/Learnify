import React from 'react'
import Sidebar from './Sidebar'
import Navbar_admin from './Navbar'

type Propscontainer = {

    children: React.ReactNode
}

const Layout_admin = ({ children }: Propscontainer) => {
    return (
        <div className='flex flex-col'>
            <Navbar_admin />
            <div className='flex justify-center gap-6 pt-28 h-[180vh]'>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default Layout_admin
