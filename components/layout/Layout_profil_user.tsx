import React from 'react'
import Navbar_Main from '../layout_main/Navbar_Main'
import Sidbar from '../user/Account/Sidbar'
 
type PropsContainer = {
    children:React.ReactNode
}

const Layout_profil_user = ({children}:PropsContainer) => {
    return (
        <div className='flex flex-col'>
            <Navbar_Main />
            <div className='flex gap-6 justify-center h-[140vh] pt-20'>
                <Sidbar />
                {children}
            </div>
        </div>
    )
}

export default Layout_profil_user
