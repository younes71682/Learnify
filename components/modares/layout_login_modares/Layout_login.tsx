import React from 'react'
import Navbar from './Navbar'
import Footer from '@/components/layout_main/Footer'

type ContainerProps = {
    children: React.ReactNode
}

const Layout_login = ({ children }: ContainerProps) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout_login
