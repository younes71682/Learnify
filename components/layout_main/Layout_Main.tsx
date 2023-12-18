import Footer from "./Footer";
import Navbar from "./Navbar_Main";



type ContainerProps = {
    children: React.ReactNode;
    showFooter: boolean
};

const Layout_Main = ({ children, showFooter = false }: ContainerProps) => {

    return (
        <div>
            <Navbar />
            {children}
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout_Main;