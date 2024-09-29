import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full md:w-[760px] lg:[1200px] mx-auto p-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
