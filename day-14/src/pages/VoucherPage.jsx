import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import VoucherList from "../components/VoucherList";

const VoucherPage = () => {
  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb currentPageTitle={"Voucher Page"} />
        <VoucherList />
      </Container>
    </section>
  );
};

export default VoucherPage;
