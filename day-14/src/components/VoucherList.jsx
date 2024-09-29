import React from "react";
import { MonitorCheck, Search } from "lucide-react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import VoucherRow from "./VoucherRow";
import VoucherSkeletonLoader from "./VoucherSkeletonLoader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VoucherList = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_BASE_URL + "/vouchers",
    fetcher
  );

  return (
    <div>
      <div className="relative flex items-center justify-between m-3">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-[250px] px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Vouncher..."
          required
        />
        <Link
          to={"/sale"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Sale <MonitorCheck className=" inline ml-1" />
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                # Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
              <td colSpan={5} className="py-3 px-6 text-center">
                There is no product.
              </td>
            </tr>
            {isLoading && <VoucherSkeletonLoader />}
            {!isLoading &&
              data?.map((voucher, index) => (
                <VoucherRow key={index} voucher={voucher} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
