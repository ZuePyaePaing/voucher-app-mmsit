import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VoucherInfo = () => {
  const [loading, setLoading] = useState(false);
  const { records, resetRecords } = useRecordStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * (0.07)
    const netTotal = total + tax;
    setLoading(true);
    const currentVoucher = { ...data, records, total, tax, netTotal };
    await fetch(`${import.meta.env.VITE_BASE_URL}/vouchers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });
    reset();
    resetRecords();
    toast.success("Voucher created successfully");
    navigate("/voucher");
    setLoading(false);
  };

  const generateVoucherId = () => {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
    const randomNumber = Math.floor(Math.random() * 90000);
    const voucherId = "INV-" + formattedDate + "-" + randomNumber;
    return voucherId;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
        <div className="w-full grid grid-cols-4  gap-5 mt-3">
          <div className="mb-6 col-span-1">
            <label
              htmlFor="voucher_id"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Voucher Id
            </label>
            <input
              type="text"
              defaultValue={generateVoucherId()}
              {...register("voucherId", { required: true })}
              id="voucher_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.voucherId && (
              <span className="text-red-500"> Voucher Id is required</span>
            )}
          </div>
          <div className="mb-6 col-span-1">
            <label
              htmlFor="customer_name"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customer-name"
              {...register("customerName", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.customerName && (
              <span className="text-red-500">Customer Name is required</span>
            )}
          </div>
          <div className="mb-6 col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="email"
              {...register("customerEmail", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.customerEmail && (
              <span className="text-red-500">Customer Name is required</span>
            )}
          </div>
          <div className="mb-6 col-span-1">
            <label
              htmlFor="sale_date"
              {...register("saleDate", { required: true })}
              className="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white"
            >
              Sale Date
            </label>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              id="sale_date"
              {...register("saleDate", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.saleDate && (
              <span className="text-red-500">Customer Name is required</span>
            )}
          </div>
        </div>
      </form>
      <SaleForm />
      <VoucherTable />
      <div className="flex justify-end items-center gap-5">
        <div className="flex items-center">
          <input
            id="redirect"
            form="infoForm"
            type="checkbox"
            {...register("redirect", { required: true })}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="redirect"
            className={`ms-2 text-sm font-medium text-gray-400 dark:text-gray-500`}
          >
            Back to Product List after saving.
          </label>
          {errors.redirect && (
            <span className="text-red-500"> Voucher Id is required</span>
          )}
        </div>

        <button
          type="submit"
          form="infoForm"
          disabled={loading}
          className="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {loading ? "Loading..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;
