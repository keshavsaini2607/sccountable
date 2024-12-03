"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Search, Filter, Download } from "lucide-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AddTrxnDialog from "../AddTrxnDialog";

interface Transaction {
   id: string;
   date: string;
   description: string;
   category: string;
   amount: number;
   status: "completed" | "pending" | "failed";
   type: "income" | "expense";
}

const TransactionTable: React.FC = () => {
   const [quickFilter, setQuickFilter] = useState("");

   const statusCellRenderer = (params: any) => {
      const statusClasses = {
         completed: "bg-green-100 text-green-800",
         pending: "bg-yellow-100 text-yellow-800",
         failed: "bg-red-100 text-red-800",
      };

      return (
         <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
               statusClasses[params.value]
            }`}
         >
            {params.value.charAt(0).toUpperCase() + params.value.slice(1)}
         </span>
      );
   };

   const amountCellRenderer = (params: any) => {
      const amount = params.value;
      const isExpense = params.data.type === "expense";
      return (
         <span
            className={`font-medium ${
               isExpense ? "text-red-600" : "text-green-600"
            }`}
         >
            {isExpense ? "-" : "+"}$
            {Math.abs(amount).toLocaleString("en-US", {
               minimumFractionDigits: 2,
            })}
         </span>
      );
   };

   const columnDefs = [
      {
         field: "date",
         headerName: "Date",
         sortable: true,
         filter: "agDateColumnFilter",
         valueFormatter: (params: any) =>
            new Date(params.value).toLocaleDateString(),
      },
      {
         field: "description",
         headerName: "Description",
         sortable: true,
         filter: "agTextColumnFilter",
         flex: 1,
      },
      {
         field: "category",
         headerName: "Category",
         sortable: true,
         filter: "agSetColumnFilter",
      },
      {
         field: "amount",
         headerName: "Amount",
         sortable: true,
         filter: "agNumberColumnFilter",
         cellRenderer: amountCellRenderer,
         type: "numericColumn",
      },
      {
         field: "status",
         headerName: "Status",
         sortable: true,
         filter: "agSetColumnFilter",
         cellRenderer: statusCellRenderer,
      },
   ];

   const defaultColDef = {
      flex: 1,
      minWidth: 100,
      sortable: true,
      filter: true,
      resizable: true,
   };

   // Sample data - replace with your actual data
   const rowData: Transaction[] = [
      {
         id: "1",
         date: "2024-03-15",
         description: "Client Payment - ABC Corp",
         category: "Income",
         amount: 5000,
         status: "completed",
         type: "income",
      },
      {
         id: "2",
         date: "2024-03-14",
         description: "Office Supplies",
         category: "Expenses",
         amount: 150.75,
         status: "completed",
         type: "expense",
      },
      // Add more sample transactions as needed
   ];

   return (
      <div className="w-full bg-white shadow-sm border border-gray-200">
         {/* Header */}
         <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
               <h2 className="text-xl font-semibold text-gray-900">
                  Transactions
               </h2>
               <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-initial">
                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                     <input
                        type="text"
                        placeholder="Search transactions..."
                        className="pl-9 pr-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        onChange={(e) => setQuickFilter(e.target.value)}
                     />
                  </div>
                  <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                     <Filter className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                     <Download className="w-4 h-4 text-gray-600" />
                  </button>
               </div>
            </div>
         </div>

         {/* Table */}
         <div className="ag-theme-alpine w-full" style={{ height: "300px" }}>
            <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={defaultColDef}
               animateRows={true}
               rowSelection="multiple"
               pagination={true}
               paginationPageSize={10}
               quickFilterText={quickFilter}
               enableCellTextSelection={true}
               suppressRowClickSelection={true}
               rowHeight={48}
               headerHeight={48}
               suppressMovableColumns={true}
               className="font-sans"
               overlayNoRowsTemplate="No transactions found"
               overlayLoadingTemplate="Loading transactions..."
            />
         </div>

         {/* Footer */}
         <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
               <span>Showing 10 of {rowData.length} transactions</span>
               <span>Last updated: {new Date().toLocaleString()}</span>
            </div>
         </div>
      </div>
   );
};

export default TransactionTable;
