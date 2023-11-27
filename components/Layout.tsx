// import Navbar from "./Navbar";
import Footer from "./Footer";

type ContainerProps = AppProps & {
    children: React.ReactNode;
};

const Layout = (props: ContainerProps) => {
    return (
        <div>
            {/* <Navbar /> */}
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;