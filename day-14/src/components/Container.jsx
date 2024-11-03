import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={` w-full md:w-[720px] lg:w-[1180px] mx-auto px-5 py-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
