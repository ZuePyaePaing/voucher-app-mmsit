import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={` w-full md:w-[720px] lg:w-[1280px] mx-auto p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
