import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";
const ProductPage = () => {
  return (
    <section className="w-full min-h-screen">
      <Container className={"space-y-2"}>
        <Breadcrumb currentPageTitle="ProductPage" />
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
