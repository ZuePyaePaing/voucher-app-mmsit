import ProductEmptyStage from "./ProductEmptyStage";
import useRecordStore from "../stores/useRecordStore";
import VoucherTableRow from "./VoucherTableRow";

const VoucherTable = () => {
  const { records } = useRecordStore();
  const total = records.reduce((a, b) => a + b.cost, 0);
  const tax = total * 0.07;
  const net_total = total + tax;
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
                  key={record.product_id}
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
                className="px-6 py-2 font-semibold text-end text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td className="px-6 py-2 text-end">${total}</td>
              <td></td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="px-6 py-2 font-semibold text-end text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tax (Vat 7%)
              </th>
              <td className="px-6 py-2 text-end">${tax.toFixed(2)}</td>
              <td></td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="px-6 py-2font-semibold text-end text-gray-900 whitespace-nowrap dark:text-white"
              >
                Net Total (MMK)
              </th>
              <td className="px-6 py-2 text-end">${net_total.toFixed(2)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default VoucherTable;
