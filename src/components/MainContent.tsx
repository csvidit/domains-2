const MainContainer = (props: { children: any }) => {
    return (
      <div className="w-full h-full flex flex-col bg-transparent justify-start mt-5 ml-5 lg:mt-10 lg:ml-10">{props.children}</div>
    );
  };
  
  export default MainContainer;
  