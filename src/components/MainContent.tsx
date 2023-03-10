const MainContainer = (props: { children: any }) => {
    return (
      <div className="w-screen h-full flex flex-col bg-transparent justify-start mt-5 ml-5 mb-5 mr-5 lg:mt-10 lg:ml-10 lg:mr-0 lg:mb-10 pt-5 lg:pt-10">{props.children}</div>
    );
  };
  
  export default MainContainer;
  