import { Trash } from "lucide-react";
import useRecordStore from "../stores/useRecordStore";
import { toast } from "react-hot-toast";

const VoucherTableRow = ({
  record: {
    id,
    product: { product_name, price },
    quantity,
    cost,
  },
  index,
}) => {
  const { changeQuantity, removeRecord } = useRecordStore();

  const handleRemoveRecord = () => {
    toast.success("Product deleted successfully");
    removeRecord(id);
  };
  const handleIncreaseQuantity = () => {
    changeQuantity(id, 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      changeQuantity(id, -1);
    } else {
      toast.success("Product deleted successfully");
      removeRecord(id);
    }
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {index + 1}
      </th>
      <td className="px-6 py-2"> {product_name}</td>
      <td className="px-6 py-2 text-end">${price}</td>
      <td className="px-6 py-2">
        <div className="flex items-center justify-end">
          <button
            onClick={handleDecreaseQuantity}
            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <p>{quantity}</p>
          <button
            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={handleIncreaseQuantity}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-end">${cost}</td>
      <td className=" px-6 py-4 flex justify-end">
        <button onClick={handleRemoveRecord}>
          <Trash className=" w-4 h-4 text-end text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default VoucherTableRow;
