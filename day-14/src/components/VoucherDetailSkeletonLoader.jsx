import React from 'react'

const VoucherDetailSkeletonLoader = () => {
  return (
    <div className="w-[148mm] shadow-lg  px-5 py-4 flex flex-col gap-y-5 mt-4">
  {/* Title Section */}
  <div className="animate-pulse">
    <div className="h-6 w-32 bg-gray-300 rounded"></div>
    <div className="h-4 w-48 bg-gray-200 rounded mt-2"></div>
  </div>

  {/* Invoice Details Section */}
  <div className="flex gap-x-5 animate-pulse">
    <div>
      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
    </div>
    <div>
      <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
    </div>
  </div>

  {/* Table Section */}
  <div className="relative overflow-x-auto sm:rounded-lg animate-pulse">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </th>
          <th scope="col" className="px-6 py-3 ">
            <div className="h-4 w-20 bg-gray-300 rounded  ms-auto"></div>
          </th>
          <th scope="col" className="px-6 py-3  ">
            <div className="h-4 w-20 bg-gray-300 rounded  ms-auto"></div>
          </th>
          <th scope="col" className="px-6 py-3 ">
            <div className="h-4 w-20 bg-gray-300  rounded  ms-auto"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array(4)
          .fill("")
          .map((_, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 ">
                <div className="h-4 w-30 bg-gray-200 rounded"></div>
              </td>
              <td className="px-6 py-4">
                <div className="h-4 w-16 bg-gray-200 rounded  ms-auto"></div>
              </td>
              <td className="px-6 py-4 ">
                <div className="h-4 w-16 bg-gray-200 rounded  ms-auto"></div>
              </td>
              <td className="px-6 py-4 ">
                <div className="h-4 w-16 bg-gray-200 rounded ms-auto"></div>
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <th
            scope="row"
            colSpan={3}
            className="px-6 py-4 text-center font-semibold text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="h-4 w-24 bg-gray-300 rounded mx-auto"></div>
          </th>
          <td className="px-6 py-4 text-end">
            <div className="h-4 w-16 bg-gray-200 rounded ms-auto"></div>
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            colSpan={3}
            className="px-6 py-2 text-end font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="h-4 w-16 bg-gray-300 rounded ms-auto"></div>
          </th>
          <td className="px-6 py-2 text-end">
            <div className="h-4 w-16 bg-gray-200 rounded ms-auto"></div>
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            colSpan={3}
            className="px-6 py-2 text-end font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="h-4 w-16 bg-gray-300 rounded ms-auto"></div>
          </th>
          <td className="px-6 py-2 text-end">
            <div className="h-4 w-16 bg-gray-200 rounded ms-auto"></div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

  )
}

export default VoucherDetailSkeletonLoader