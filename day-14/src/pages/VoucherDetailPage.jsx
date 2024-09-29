import React from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import VoucherDetailSkeletonLoader from "../components/VoucherDetailSkeletonLoader";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VoucherDetailPage = () => {
  const location = useLocation();
  const { id } = location.state;

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/vouchers/${id}`,
    fetcher
  );
  console.log(data);
  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb currentPageTitle={"Voucher Detail Page"} />
        {isLoading && <VoucherDetailSkeletonLoader />}
        {data && (
          <div className=" w-[90%] h-screen shadow-lg mx-auto px-5 py-4 flex flex-col gap-y-5 mt-4">
            <div>
              <h2 className=" font-bold text-xl">MMS</h2>
              <p className="font-semibold text-md tracking-wide">
                THIS IS YOUR INVOICE
              </p>
            </div>
            <div className="flex gap-x-5">
              <div>
                <p className=" text-sm">Invoice No :</p>
                <p className=" text-sm">Customre Name :</p>
                <p className=" text-sm">Customer Email :</p>
                <p className=" text-sm">Date :</p>
              </div>
              <div>
                <p className=" text-sm">{data.voucherId}</p>
                <p className=" text-sm">{data.customerName}</p>
                <p className=" text-sm">{data.customerEmail}</p>
                <p className=" text-sm">{data.saleDate}</p>
              </div>
            </div>
            <div className="relative overflow-x-auto  sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      PRODUCT
                    </th>
                    <th scope="col" className="px-6 py-3 text-end ">
                      UNIT PRICE
                    </th>
                    <th scope="col" className="px-6 py-3 text-end ">
                      QTY
                    </th>
                    <th scope="col" className="px-6 py-3 text-end ">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.records.map((record) => (
                    <tr
                      key={record.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {record.product.name}
                      </th>
                      <td className="px-6 py-4 text-end">
                        {record.product.price}
                      </td>
                      <td className="px-6 py-4 text-end">{record.quantity}</td>
                      <td className="px-6 py-4 text-end">{record.cost}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="px-6 py-4 text-center font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      SUBTOTAL
                    </th>
                    <td className="px-6 py-4 text-end">
                      {data.total.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="px-6 py-2 text-end font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      TAX (7%)
                    </th>
                    <td className="px-6 py-2 text-end">
                      {data.tax.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="px-6 py-2 text-end font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      TOTAL
                    </th>
                    <td className="px-6 py-2 text-end">
                      {data.netTotal.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
