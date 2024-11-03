import { useForm } from "react-hook-form";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTokenStore from "../stores/useTokenStore";

const VoucherInfo = () => {
  const { records, resetRecords } = useRecordStore();
  const { token } = useTokenStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = +(total * 0.07).toFixed(2); // Ensure tax is a number
    const net_total = +(total + tax).toFixed(2);

    const currentVoucher = { ...data, records, total, tax, net_total };

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/vouchers`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(currentVoucher),
      });

      if (res.ok) {
        toast.success("Voucher created successfully");
        reset();
        resetRecords();
        navigate("/dashboard/voucher");
      } else {
        toast.error("Failed to create voucher.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  const generateVoucherId = () => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomNumber = Math.floor(Math.random() * 90000);
    return `INV-${date}-${randomNumber}`;
  };

  return (
    <div className="flex gap-3 mt-2 items-start lg:flex-row  flex-col-reverse">
      <div>
        <SaleForm />
        <VoucherTable />
        <div className="flex justify-end items-center gap-5">
        <div>
          <input
            id="redirect"
            form="infoForm"
            type="checkbox"
            {...register("all_correct", {
              required: "Please confirm all fields are correct",
            })}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="redirect"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            All correct field data.
          </label>
          {errors.all_correct && (
            <span className="text-red-500">{errors.all_correct.message}</span>
          )}
        </div>
        <button
          type="submit"
          form="infoForm"
          disabled={isSubmitting}
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {isSubmitting ? "Loading..." : "Add Product"}
        </button>
      </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
        <div className="w-full grid lg:grid-cols-2 grid-cols-4 gap-3  border p-3 rounded-lg">
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
              {...register("voucher_id", {
                required: "Voucher ID is required",
              })}
              id="voucher_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.voucher_id && (
              <span className="text-red-500">{errors.voucher_id.message}</span>
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
              {...register("customer_name", {
                required: "Customer name is required",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.customer_name && (
              <span className="text-red-500">
                {errors.customer_name.message}
              </span>
            )}
          </div>
          <div className="mb-6 col-span-1">
            <label
              htmlFor="customer_email"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Customer Email
            </label>
            <input
              type="email"
              {...register("customer_email", {
                required: "Customer email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.customer_email && (
              <span className="text-red-500">
                {errors.customer_email.message}
              </span>
            )}
          </div>
          <div className="mb-6 col-span-1">
            <label
              htmlFor="sale_date"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Sale Date
            </label>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              {...register("sale_date", { required: "Sale date is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.sale_date && (
              <span className="text-red-500">{errors.sale_date.message}</span>
            )}
          </div>
        </div>
      </form> 
    </div>
  );
};

export default VoucherInfo;
