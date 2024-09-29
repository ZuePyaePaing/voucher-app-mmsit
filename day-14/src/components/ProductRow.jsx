import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { bouncy } from "ldrs";
import { useSWRConfig } from "swr";
import { toast } from "react-hot-toast";
import ShowDate from "./ShowDate";
bouncy.register();

const ProductRow = ({ product: { id, name, price, created_at }, index }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { mutate } = useSWRConfig();
  const handleDelete = async (id) => {
    setIsDeleted(true);
    await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    setIsDeleted(false);
    toast.success("Product deleted successfully");
    mutate(`${import.meta.env.VITE_BASE_URL}/products`);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {index + 1}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4 text-end">${price}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link
            to={"/edit/" + id}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <Pencil size={18} />
          </Link>
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className=" size-10 flex items-center justify-center text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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

export default ProductRow;
