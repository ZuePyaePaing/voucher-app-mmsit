import {
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import useSWR from "swr";
import ProductRow from "./ProductRow";
import ProductEmptyStage from "./ProductEmptyStage";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import { debounce, set, sortBy } from "lodash";
import { useEffect, useState } from "react";
import fetcher from "../utils/fetcher";

const ProductList = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_BASE_URL + "/products" + location.search
  );

  const { data, isLoading } = useSWR(fetchUrl, fetcher);

  const handleSearch = debounce((e) => {
    const query = e.target.value;
    if (query) {
      setParams({ q: query });
      setFetchUrl(`${import.meta.env.VITE_BASE_URL}/products?q=${query}`);
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_BASE_URL}/products`);
    }
  }, 500);

  // Update fetchUrl when location.search changes
  useEffect(() => {
    setFetchUrl(import.meta.env.VITE_BASE_URL + "/products" + location.search);
  }, [location.search]);

  const updateUrl = (url) => {
    const currentUrl = new URL(url);
    const searchParams = currentUrl.searchParams;
    const objectParams = Object.fromEntries(searchParams.entries());
    setParams(objectParams);
    setFetchUrl(url);
  };

  const handleSort = (sortData) => {
    setParams(sortData);
  };
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
          placeholder="Search Product..."
          onChange={handleSearch}
          required
        />
        <Link
          to={"/dashboard/create-product"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product <Plus className="inline ml-1" />
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 flex items-center gap-x-2">
                <span className=" inline-flex flex-col ">
                  <ChevronUp
                    onClick={() =>
                      handleSort({ sort_by: "id", sort_direction: "asc" })
                    }
                    size={14}
                    className=" cursor-pointer hover:bg-blue-400"
                  />
                  <ChevronDown
                    onClick={() =>
                      handleSort({ sort_by: "id", sort_direction: "desc" })
                    }
                    size={14}
                    className=" cursor-pointer hover:bg-blue-400"
                  />
                </span>
                <span>ID</span>
              </th>
              <th scope="col" className="px-6 py-3 ">
                Product name
              </th>
              <th
                scope="col"
                className="px-6 py-3 flex items-center gap-x-2 text-end"
              >
                <span className=" inline-flex flex-col ">
                  {" "}
                  <ChevronUp
                    onClick={() =>
                      handleSort({ sort_by: "price", sort_direction: "asc" })
                    }
                    size={14}
                    className=" cursor-pointer hover:bg-blue-400"
                  />
                  <ChevronDown
                    onClick={() =>
                      handleSort({ sort_by: "price", sort_direction: "desc" })
                    }
                    size={14}
                    className=" cursor-pointer hover:bg-blue-400"
                  />
                </span>
                <span> Price</span>
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
            {isLoading ? (
              <ProductSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <ProductEmptyStage />
            ) : (
              data?.data?.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination meta={data?.meta} updateUrl={updateUrl} />
    </div>
  );
};

export default ProductList;
