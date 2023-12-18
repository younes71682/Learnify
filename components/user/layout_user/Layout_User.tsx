import React from 'react'
import Navbar_User from './Navbar_User'
import Footer from '@/components/layout_main/Footer'

type ContainerProps = {
    children: React.ReactNode
    showFooter: boolean
}

const Layout_User = ({ children, showFooter = false }: ContainerProps) => {
    return (
        <div>
            <Navbar_User />
            {children}
            {showFooter && <Footer />}
        </div>
    )
}

export default Layout_User
