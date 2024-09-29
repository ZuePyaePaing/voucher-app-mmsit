import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../stores/useRecordStore";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const SaleForm = () => {
  const { addRecord, records, changeQuantity } = useRecordStore();

  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/products`,
    fetcher
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentQuantity = JSON.parse(data.quantity);

    const isExited = records.find(
      ({ product: { id } }) => currentProduct.id === id
    );
    
    if (isExited) {
      changeQuantity(isExited.id, currentQuantity);
    } else {
      addRecord({
        id: Date.now(),
        product: currentProduct,
        quantity: currentQuantity,
        cost: currentQuantity * currentProduct.price,
        created_at: new Date().toISOString(),
      });
    }
    reset();
  };

  return (
    <div className=" mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-5 gap-5 p-5 border rounded-md">
          <div className=" col-span-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Select your product
            </label>
            <select
              id="countries"
              {...register("product", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={""}>Selet a product</option>
              {isLoading ? (
                <option>loading...</option>
              ) : (
                data.map((item) => (
                  <option key={item.id} value={JSON.stringify(item)}>
                    {item.name}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className=" col-span-2">
            <label
              htmlFor="product-input"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Product Quantity
            </label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              id="product-input"
              placeholder="e.g. Apple"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.quantity && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className=" col-span-1 text-blue-700 w-full h-full flex items-center justify-center hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
