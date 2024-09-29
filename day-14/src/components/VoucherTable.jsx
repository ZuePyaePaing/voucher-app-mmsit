import ProductEmptyStage from "./ProductEmptyStage";
import useRecordStore from "../stores/useRecordStore";
import VoucherTableRow from "./VoucherTableRow";

const VoucherTable = () => {
  const { records } = useRecordStore();
  const total = records.reduce((a, b) => a + b.cost, 0);
  const tex = total * (0.07)
  const netTotla = total + tex
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Cost
              </th>
              <th scope="col" className="px-6 py-3 text-end"></th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 && <ProductEmptyStage />}
            {records.map((record, index) => {
              return (
                <VoucherTableRow
                  key={record.id}
                  record={record}
                  index={index}
                />
              );
            })}
          </tbody>
          <tfoot>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="px-6 py-4 font-semibold text-end text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td className="px-6 py-4 text-end">${total}</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="px-6 py-4 font-semibold text-end text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tax (Vat 7%)
              </th>
              <td className="px-6 py-4 text-end">${tex.toFixed(2)}</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="px-6 py-4 font-semibold text-end text-gray-900 whitespace-nowrap dark:text-white"
              >
                Net Total (MMK)
              </th>
              <td className="px-6 py-4 text-end">${netTotla.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default VoucherTable;
