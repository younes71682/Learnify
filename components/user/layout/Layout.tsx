import Footer from "./Footer";
import Navbar from "./Navbar";

 


type ContainerProps = {
    children: React.ReactNode;
};
  
const Layout = (props: ContainerProps) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;