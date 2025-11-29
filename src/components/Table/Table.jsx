import "react-data-grid/lib/styles.css";
import { DataGrid } from "react-data-grid";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ correct import


const Table = ({ myContribution }) => {
  const columns = [
    { key: "id", name: "SL NO" },
    { key: "title", name: "Title" },
    { key: "category", name: "Category" },
    { key: "amount", name: "Amount" },
    { key: "date", name: "Date" },
  ];

  const rows = myContribution.map((item, index) => ({
    id: index + 1,
    title: item.title,
    category: item.category,
    amount: item.amount,
    date: item.date,
  }));

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("My Contributions", 14, 10);
  
    const tableColumn = columns.map((col) => col.name);
    const tableRows = rows.map((row) => columns.map((col) => row[col.key]));
  
    autoTable(doc, { 
      head: [tableColumn],
      body: tableRows,
    });
  
    doc.save("My Contributions.pdf");
  };

  return (
    <div className="h-full relative">

      <DataGrid columns={columns} rows={rows}/>
      <button
        onClick={exportToPDF}
        className="btn text-white bg-green-800 btn-success mt-2 w-50 absolute right-0"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Table;
