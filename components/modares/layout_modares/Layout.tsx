import React from 'react';
import Navbar from './Navbar';
import Footer from '@/components/layout_main/Footer';
 
type ContainerProps = {
    children: React.ReactNode;
    showFooter: boolean
};

const   Layout = ({ children, showFooter=true }: ContainerProps) => {

    return (
        <div>
            <Navbar />
            {children}
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout;
