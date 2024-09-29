import React from "react";

const ProductSkeletonLoader = () => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-4 w-24  bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 ms-auto bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-4 w-24 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-4 w-24  bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 ms-auto bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-4 w-24 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-4 w-24  bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 ms-auto bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-4 w-24 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
      </tr>{" "}
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-4 w-24  bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 ms-auto bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-4 w-24 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
            <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductSkeletonLoader;
