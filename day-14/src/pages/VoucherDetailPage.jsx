import React from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import VoucherDetailSkeletonLoader from "../components/VoucherDetailSkeletonLoader";
import VoucherUI from "../components/VoucherUI";
import fetcher from "../utils/fetcher";
const VoucherDetailPage = () => {
  const location = useLocation();
  const { id } = location.state;

  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/vouchers/${id}`,
    fetcher
  );

  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb
          currentPageTitle={"Voucher Detail"}
          link={[{ title: "Voucher Module", path: "/dashboard/voucher" }]}
        />
        {isLoading && <VoucherDetailSkeletonLoader />}
        {data && <VoucherUI data={data?.data} />}
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
