import React from 'react'
import Navbar_User from '../user/layout_user/Navbar_User'
import Sidebar from '../admin/Sidebar'

type Propscontainer = {

    children: React.ReactNode
}

const Layout_admin = ({ children }: Propscontainer) => {
    return (
        <div className='flex flex-col'>
            <Navbar_User />
            <div className='flex justify-center gap-6 pt-28 h-[180vh]'>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default Layout_admin
