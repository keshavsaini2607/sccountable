'use client'
import React, { useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { monthNames } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import AddTrxnDialog from '../AddTrxnDialog';

const TransactionsTable = () => {

    const [rowData, setRowData] = useState<any>([
        { date: new Date(), amount: "23000", "paidTo / RecievedFrom": "SK Delhi", transactionType: "Income", transactionMedium: "Cash" },
        { date: new Date(), amount: "1,20,000", "paidTo / RecievedFrom": "Mahalaxmi Aluminium", transactionType: "Expense", transactionMedium: "Bank transfer" },
        { date: new Date(), amount: "14000", "paidTo / RecievedFrom": "ASI Delhi", transactionType: "Income", transactionMedium: "Cash" },
    ]);

    const [colDefs, setColDefs] = useState<any>([
        { field: "date" },
        { field: "amount" },
        { field: "paidTo / RecievedFrom" },
        { field: "transactionType" },
        { field: "transactionMedium" },
    ]);

    // const rowSelection = useMemo<any>(() => { 
    //     return {
    //         mode: 'multiRow',
    //     };
    // }, []);

    const autoSizeStrategy: any = {
        type: 'fitCellContents'
    };

    return (
        <div className='w-full border p-1 rounded'>
            <div className='flex items-center justify-between mb-2'>
                <span className='text-lg font-semibold'>Transactions{" "}
                    <span className='text-sm text-gray-600'>(In {monthNames[new Date().getMonth()]} {new Date().getFullYear()})</span>
                </span>
                <AddTrxnDialog />
            </div>
            <div
                className="ag-theme-quartz" // applying the Data Grid theme
                style={{ height: 300 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    // rowSelection={rowSelection}
                    autoSizeStrategy={autoSizeStrategy}
                />
            </div>
        </div>
    )
}

export default TransactionsTable