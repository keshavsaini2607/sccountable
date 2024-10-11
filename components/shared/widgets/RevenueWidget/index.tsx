'use client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

// React Chart Component
import { AgCharts } from 'ag-charts-react';

const RevenueWidget = () => {

    const [chartOptions, setChartOptions] = useState<any>({
        // Data: Data to be displayed in the chart
        data: [
            { month: 'Jan', sales: 162000 },
            { month: 'Mar', sales: 302000 },
            { month: 'May', sales: 800000 },
            { month: 'Jul', sales: 1254000 },
            { month: 'Sep', sales: 950000 },
            { month: 'Nov', sales: 200000 },
        ],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'month', yKey: 'sales' }],
    });

    return (
        <div className='w-full border p-2 rounded'>
            <div className='flex items-center justify-between border-b-[1px] border-b-accent'>
                <span className='font-semibold text-lg'>Revenue</span>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded bg-primary'></div>
                        <span className='text-xs'>Income</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded bg-secondary'></div>
                        <span className='text-xs'>Expenses</span>
                    </div>
                </div>
            </div>
            <div>
                <AgCharts options={chartOptions} />
            </div>
        </div>
    )
}

export default RevenueWidget