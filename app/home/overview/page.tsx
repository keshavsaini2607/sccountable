import InfoCard from '@/components/shared/InfoCard'
import TransactionsTable from '@/components/shared/TransactionsTable'
import RevenueWidget from '@/components/shared/widgets/RevenueWidget'
import { Calendar } from 'lucide-react'
import React from 'react'

const OverviewPage = () => {
    return (
        <div className='p-4 bg-white'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xl font-semibold'>Dashboard</span>
                    <span className='text-sm text-gray-600'>A way to manage sales with care and precision.</span>

                </div>
                <div className='flex items-center gap-2 border-2 rounded-xl w-max p-2 cursor-pointer'>
                    <Calendar size={20} />
                    <span className='text-sm'>March 24 - May 24</span>
                </div>
            </div>

            <div className='mt-4 flex items-center gap-6'>
                <InfoCard
                    type='Primary'
                    title='Update'
                    content='40%'
                />
                <InfoCard
                    type='Normal'
                    title='Net Income'
                    content="₹2,30,000"
                    isHighlight={true}
                />
                <InfoCard
                    type='Normal'
                    title='Net Profit'
                    content="₹30,000"
                    isHighlight={true}
                />
            </div>

            <div className='mt-4 flex items-start gap-4'>
                <div className='w-[60%]'>
                    <TransactionsTable />
                </div>
                <div className='w-[35%]'>
                    <RevenueWidget />
                </div>
            </div>
        </div>
    )
}

export default OverviewPage