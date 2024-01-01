import React from 'react'
import Navbar from '../modares/layout_login_modares/Navbar'
import Sidebar from '../modares/Account/Sidebar'

type Propscontainer = {
    children: React.ReactNode
}

const Layout_profil_modares = ({ children }: Propscontainer) => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex gap-6 h-[150vh] justify-center pt-24'>
                <Sidebar />
                {children}
            </div>

        </div>
    )
}

export default Layout_profil_modares
