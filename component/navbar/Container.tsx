type ContainerProps = AppProps & {
    children: React.ReactNode;
  };
  import Nav from "./Nav";
  const Container = (props: ContainerProps) => {
    return (
      <div>
        <Nav />
        {props.children}
      </div>
    );
  };
  
  export default Container;