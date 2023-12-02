import Navbar from "./user/home_page/nav/Navbar";

 
type ContainerProps = AppProps & {
    children: React.ReactNode;
};

const Layout = (props: ContainerProps) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;