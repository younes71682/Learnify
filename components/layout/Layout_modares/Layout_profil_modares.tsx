import React from 'react'
import Sidebar from '../../modares/Account/Sidebar'
import Nav_prof from './Nav_prof'

type Propscontainer = {
    children: React.ReactNode
}

const Layout_profil_modares = ({ children }: Propscontainer) => {
    return (
        <div className='flex flex-col'>
            <Nav_prof />
            <div className='flex gap-6 h-[150vh] justify-center pt-24'>
                <Sidebar />
                {children}
            </div>

        </div>
    )
}

export default Layout_profil_modares
