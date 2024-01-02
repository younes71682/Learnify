import React from 'react'
import Sidbar from '../../user/Account/Sidbar'
import Nav_prof from './Nav_prof'

type PropsContainer = {
    children: React.ReactNode
}

const Layout_profil_user = ({ children }: PropsContainer) => {
    return (
        <div className='flex flex-col'>
            <Nav_prof />
            <div className='flex gap-6 justify-center h-[140vh] pt-20'>
                <Sidbar />
                {children}
            </div>
        </div>
    )
}

export default Layout_profil_user
