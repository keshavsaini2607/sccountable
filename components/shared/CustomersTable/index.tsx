"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
   Search,
   Filter,
   Download,
   Plus,
   Mail,
   Phone,
   MapPin,
   Building2,
} from "lucide-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface Customer {
   id: string;
   name: string;
   email: string;
   phone: string;
   address: string;
   country: string;
   city: string;
   zipCode: string;
   industry: string;
   company: string;
   jobTitle: string;
   status: "active" | "inactive" | "pending";
   lastInteraction: string;
   totalRevenue: number;
}

const CustomersTable: React.FC = () => {
   const [quickFilter, setQuickFilter] = useState("");

   const statusCellRenderer = (params: any) => {
      const statusClasses = {
         active: "bg-green-100 text-green-800",
         inactive: "bg-gray-100 text-gray-800",
         pending: "bg-yellow-100 text-yellow-800",
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

   const revenueCellRenderer = (params: any) => {
      const amount = params.value;
      return (
         <span className="font-medium text-gray-900">
            ${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
         </span>
      );
   };

   const contactCellRenderer = (params: any) => {
      return (
         <div className="flex items-center space-x-2">
            <a
               href={`mailto:${params.data.email}`}
               className="p-1 hover:bg-gray-100 rounded"
            >
               <Mail className="w-4 h-4 text-gray-600" />
            </a>
            <a
               href={`tel:${params.data.phone}`}
               className="p-1 hover:bg-gray-100 rounded"
            >
               <Phone className="w-4 h-4 text-gray-600" />
            </a>
         </div>
      );
   };

   const nameCellRenderer = (params: any) => {
      return (
         <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
               <span className="text-sm font-medium text-blue-700">
                  {params.value
                     .split(" ")
                     .map((n: string) => n[0])
                     .join("")}
               </span>
            </div>
            <div>
               <div className="font-medium text-gray-900">{params.value}</div>
               <div className="text-sm text-gray-500">
                  {params.data.company}
               </div>
            </div>
         </div>
      );
   };

   const columnDefs = [
      {
         field: "name",
         headerName: "Customer",
         sortable: true,
         filter: "agTextColumnFilter",
         cellRenderer: nameCellRenderer,
         flex: 2,
      },
      {
         field: "contact",
         headerName: "Contact",
         cellRenderer: contactCellRenderer,
         width: 100,
      },
      {
         field: "industry",
         headerName: "Industry",
         sortable: true,
         filter: "agSetColumnFilter",
      },
      {
         field: "status",
         headerName: "Status",
         sortable: true,
         filter: "agSetColumnFilter",
         cellRenderer: statusCellRenderer,
      },
      {
         field: "totalRevenue",
         headerName: "Total Revenue",
         sortable: true,
         filter: "agNumberColumnFilter",
         cellRenderer: revenueCellRenderer,
         type: "numericColumn",
      },
      {
         field: "lastInteraction",
         headerName: "Last Interaction",
         sortable: true,
         filter: "agDateColumnFilter",
         valueFormatter: (params: any) =>
            new Date(params.value).toLocaleDateString(),
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
   const rowData: Customer[] = [
      {
         id: "1",
         name: "John Smith",
         email: "john@example.com",
         phone: "+1 234 567 890",
         address: "123 Main St",
         country: "USA",
         city: "New York",
         zipCode: "10001",
         industry: "Technology",
         company: "Tech Corp",
         jobTitle: "CEO",
         status: "active",
         lastInteraction: "2024-03-15",
         totalRevenue: 50000,
      },
      {
         id: "2",
         name: "Sarah Johnson",
         email: "sarah@example.com",
         phone: "+1 234 567 891",
         address: "456 Oak Ave",
         country: "USA",
         city: "San Francisco",
         zipCode: "94105",
         industry: "Healthcare",
         company: "Health Plus",
         jobTitle: "Director",
         status: "active",
         lastInteraction: "2024-03-14",
         totalRevenue: 75000,
      },
      // Add more sample customers as needed
   ];

   return (
      <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
         {/* Header */}
         <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
               <div>
                  <h1 className="font-bold">Customer Management</h1>
                  <p>View and manage all your customers.</p>
               </div>
               <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-initial">
                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                     <input
                        type="text"
                        placeholder="Search customers..."
                        className="pl-9 pr-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
               rowHeight={64}
               headerHeight={48}
               suppressMovableColumns={true}
               className="font-sans"
               overlayNoRowsTemplate="No customers found"
               overlayLoadingTemplate="Loading customers..."
            />
         </div>

         {/* Footer */}
         <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
               <span>Showing 10 of {rowData.length} customers</span>
               <span>Last updated: {new Date().toLocaleString()}</span>
            </div>
         </div>
      </div>
   );
};

export default CustomersTable;
