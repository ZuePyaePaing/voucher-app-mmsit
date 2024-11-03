import React, { useState } from "react";
import { Trash2,PenIcon } from "lucide-react";
import { bouncy } from "ldrs";
import { useSWRConfig } from "swr";
import { toast } from "react-hot-toast";
import ShowDate from "./ShowDate";
import { useNavigate } from "react-router-dom";
import useTokenStore from "../stores/useTokenStore";
bouncy.register();
const VoucherRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, created_at },
}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const handleDelete = async (id) => {
    const {token}=useTokenStore()
    setIsDeleted(true);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/vouchers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    setIsDeleted(false);
    if (res.ok) {
      toast.success("Product deleted successfully");
      mutate(`${import.meta.env.VITE_BASE_URL}/vouchers`);
    }
  };

  const handleDetailVoucher = (id) => {
    navigate(`/dashboard/voucher/${id}`, {
      state: {
        id: id,
      },
    });
  };

  return (
    <tr className="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {voucher_id}
      </th>
      <td className="px-6 py-2">{customer_name}</td>
      <td className="px-6 py-2 text-end">{customer_email}</td>
      <td className="px-6 py-2 text-end">
        <ShowDate timestamp={created_at} />
      </td>
      <td className="px-6 py-2 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={(event) => handleDetailVoucher(id)}
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-s-lg text-blue-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <PenIcon size={18} />
          </button>
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className="px-4 py-2 rounded-e-lg text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleted ? (
              <l-bouncy size="18" speed="1.75" color="red"></l-bouncy>
            ) : (
              <Trash2 size={18} />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VoucherRow;
