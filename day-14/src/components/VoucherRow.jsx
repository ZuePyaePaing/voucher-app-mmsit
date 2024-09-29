import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { bouncy } from "ldrs";
import { useSWRConfig } from "swr";
import { toast } from "react-hot-toast";
import ShowDate from "./ShowDate";
import { useNavigate } from "react-router-dom";
bouncy.register();
const VoucherRow = ({
  voucher: { id, voucherId, customerName, customerEmail, saleDate },
}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const handleDelete = async (id, event) => {
    event.stopPropagation();
    setIsDeleted(true);
    await fetch(`${import.meta.env.VITE_BASE_URL}/vouchers/${id}`, {
      method: "DELETE",
    });
    setIsDeleted(false);
    toast.success("Product deleted successfully");
    mutate(`${import.meta.env.VITE_BASE_URL}/vouchers`);
  };

  const handleDetailVoucher = (id) => {
    navigate(`/voucher/${id}`, {
      state: {
        id: id,
      },
    });
  };

  return (
    <tr
      onClick={() => handleDetailVoucher(id)}
      className="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {voucherId}
      </th>
      <td className="px-6 py-4">{customerName}</td>
      <td className="px-6 py-4 text-end">{customerEmail}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={saleDate} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={(event) => handleDelete(id)}
            type="button"
            className="px-4 py-2 text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
