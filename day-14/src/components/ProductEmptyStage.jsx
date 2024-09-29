import React from "react";

const ProductEmptyStage = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
      <td colSpan={5} className="py-3 px-6 text-center">
        There is no product.
      </td>
    </tr>
  );
};

export default ProductEmptyStage;
