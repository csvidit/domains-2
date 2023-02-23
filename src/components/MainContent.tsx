const MainContainer = (props: { children: any }) => {
    return (
      <div className="w-full h-full flex flex-col bg-transparent justify-start">{props.children}</div>
    );
  };
  
  export default MainContainer;
  