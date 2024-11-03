import printJS from "print-js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const VoucherUI = ({ data }) => {
  const voucherId = "voucher-to-print"; 

  // Use printJS to handle the printing
  const handlePrint = () => {
    printJS({
      printable: voucherId, // Use the element ID for printJS
      type: "html",
      targetStyles: ["*"],
      documentTitle: "Voucher Print",
      showModal: true,
      style: `
        @media print {
          body {
            -webkit-print-color-adjust: exact; /* Ensure colors are printed as seen */
          }
          .voucher-container {
            width: 100%;
          }
        }
      `,
    });
  };

  // Download voucher as PDF
  const handleDownloadPdf = () => {
    const input = document.getElementById(voucherId);
    if (!input) return;

    const quality = 2;
    const pdfDpi = 300;
    const pdfScaleFactor = pdfDpi / 96;

    html2canvas(input, {
      scale: quality,
      useCORS: true,
      scrollY: -window.scrollY,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a5");
      const imgWidth = 148 * pdfScaleFactor;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth / pdfScaleFactor,
        imgHeight / pdfScaleFactor
      );
      pdf.save("voucher-high-quality.pdf");
    });
  };

  return (
    <div className="flex gap-3">
      {/* Voucher Component */}
      <Voucher data={data} id={voucherId} />

      {/* Print and Download Buttons */}
      <div className="flex flex-col gap-y-3">
        <button
          onClick={handlePrint}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Voucher Print
        </button>
        <button
          onClick={handleDownloadPdf}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default VoucherUI;

const Voucher = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[150.5mm] shadow-lg px-5 py-4 flex flex-col gap-y-5 mt-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
    >
      {/* Header */}
      <div>
        <h2 className="font-bold text-xl">MMS</h2>
        <p className="font-semibold text-md tracking-wide">
          THIS IS YOUR INVOICE
        </p>
      </div>

      {/* Customer Info */}
      <div className="flex gap-x-5">
        <div>
          <p className="text-sm">Invoice No :</p>
          <p className="text-sm">Customer Name :</p>
          <p className="text-sm">Customer Email :</p>
          <p className="text-sm">Date :</p>
        </div>
        <div>
          <p className="text-sm">{data.voucher_id}</p>
          <p className="text-sm ">{data.customer_name}</p>
          <p className="text-sm">{data.customer_email}</p>
          <p className="text-sm">{data.sale_date}</p>
        </div>
      </div>

      {/* Product Table */}
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                PRODUCT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                UNIT PRICE
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                QTY
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.records.map((record) => (
              <tr
                key={record.id}
                className="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-wrap font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {record.product.product_name}
                </th>
                <td className="px-6 py-4 text-end">{record.product.price}</td>
                <td className="px-6 py-4 text-end">{record.quantity}</td>
                <td className="px-6 py-4 text-end">{record.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white"
              >
                SUBTOTAL
              </th>
              <td className="px-6 py-4 text-end">{data?.total}</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="px-6 py-2 text-end font-medium text-gray-900 dark:text-white"
              >
                TAX (7%)
              </th>
              <td className="px-6 py-2 text-end">{data?.tax}</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="px-6 py-2 text-end font-medium text-gray-900 dark:text-white"
              >
                TOTAL
              </th>
              <td className="px-6 py-2 text-end">{data?.net_total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
