import React from 'react'
import Sidebar from '../../modares/Account/Sidebar'
import Navbar_login from './Nav_login'

type Propscontainer = {
    children: React.ReactNode
}

const Layout_profil_modares = ({ children }: Propscontainer) => {
    return (
        <div className='flex flex-col'>
            <Navbar_login />
            <div className='flex gap-6 h-[150vh] justify-center pt-24'>
                <Sidebar />
                {children}
            </div>

        </div>
    )
}

export default Layout_profil_modares
