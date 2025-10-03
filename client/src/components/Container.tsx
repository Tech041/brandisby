import React from "react";
interface ContainerProp {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProp) => {
  return (
    <div className="w-full max-w-[1400px] px-5 xl:px-10 py-8 mx-auto">
      {children}
    </div>
  );
};

export default Container;
