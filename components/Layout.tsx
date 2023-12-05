import Footer from "./global/Footer";
import Sidebar from "./user/Account/Sidbar";
import Navbar from "./user/home_page/nav/Navbar";

 
type ContainerProps = AppProps & {
    children: React.ReactNode;
};

const Layout = (props: ContainerProps) => {
    return (
        <div>
            <Navbar />
            
          {/* <Sidebar/> */}
            {props.children}
             <Footer/>
        </div>
    );
};

export default Layout;