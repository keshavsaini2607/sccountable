'use client'

import React, { useState } from 'react';
import { LuLayoutPanelLeft } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaChevronRight, FaAngleDown } from "react-icons/fa6";

interface Props { }

const menuItems = [
    {
        name: 'Overview',
        icon: LuLayoutPanelLeft
    },
    {
        name: 'Transactions',
        icon: VscGraph
    },
    {
        name: 'Customers',
        icon: IoMdContacts,
    },
    {
        name: 'Statements',
        icon: BiSolidReport,
        childMenu: [
            {
                name: 'P&L Statement'
            },
            {
                name: 'Balance Sheet'
            },
            {
                name: 'Cash Flow Statement'
            },
        ]
    },
]

const Sidebar: React.FC<Props> = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const handleMenuClick = (itemName: string) => {
        setActiveTab(itemName);
    };

    return (
        <aside className='bg-primary text-white h-full relative'>
            <div className='p-6 flex items-center gap-2 mb-4'>
                <TfiDashboard size={30} className='text-secondary' />
                <h1 className='font-semibold text-xl text-white'>accoun<span className='text-secondary'>table</span></h1>
            </div>
            <div>
                <span className='text-accent text-sm uppercase ml-6'>Menu</span>
                <ul className='flex flex-col gap-6 mt-4 relative'>
                    {
                        menuItems.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <li className='flex items-center justify-between pr-3 cursor-pointer' onClick={() => handleMenuClick(item.name)}>
                                    <div className='flex gap-3 items-center h-[2rem] px-6 relative'>
                                        {activeTab === item.name && (
                                            <div className='absolute left-0 top-0 h-full w-[4px] bg-secondary rounded-tr-lg rounded-br-lg'></div>
                                        )}
                                        <span className={`text-2xl ${activeTab === item.name ? 'text-secondary' : 'text-accent'}`}>{item.icon()}</span>
                                        <span className={`${activeTab === item.name ? 'text-white' : 'text-accent'} text-sm`}>{item.name}</span>
                                    </div>
                                    {item.childMenu ? (
                                        activeTab === item.name ? <FaAngleDown className='text-accent' /> : <FaChevronRight className='text-accent' />
                                    ) : null}
                                </li>
                                {
                                    item.childMenu && activeTab === item.name && (
                                        <ol className='ml-6 flex flex-col gap-2'>
                                            {item.childMenu.map((child, childIdx) => (
                                                <li key={childIdx} className='flex items-center h-[2rem] px-6'>
                                                    <span className={`text-accent text-sm relative`}>{child.name}
                                                        <span className='bg-secondary text-white -top-3 px-2 text-[0.5rem] rounded-xl absolute w-max'>Coming Soon</span>
                                                    </span>
                                                </li>
                                            ))}
                                        </ol>
                                    )
                                }
                            </React.Fragment>
                        ))
                    }
                </ul>
            </div>
            <div className='absolute bottom-0 w-full'>
                <div className='divider'></div>
                <div className='p-6 flex items-center gap-4'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shad.png" />
                        <AvatarFallback>KS</AvatarFallback>
                    </Avatar>
                    <span>Keshav Saini</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
