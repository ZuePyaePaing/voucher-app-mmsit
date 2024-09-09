import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header>
      <Container>
        <h2 className=" text-2xl font-bold">Voucher App</h2>
        <p className=" text-sm text-gray-500 ">MMS Software</p>
      </Container>
    </header>
  );
};

export default Header;
