import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa6';
import { IoTrendingUp } from "react-icons/io5";
import AiIcon from '@/app/assets/aiicon.png';
import Image from 'next/image';

interface Props {
    type: 'Primary' | 'Normal';
    title: string;
    content: string;
    isHighlight?: boolean;
}

const InfoCard: React.FC<Props> = ({ type, title, content, isHighlight }) => {
    const isPrimary = type === 'Primary';

    return (
        <div className={`${isPrimary ? 'bg-primary border-primary' : 'bg-white border-accent'} h-[22vh] border-2 w-[15vw] p-4 rounded-xl flex flex-col justify-between`}>
            <div className='flex items-center justify-between'>
                <span className={`${isPrimary ? 'text-white' : 'text-primary'} text-sm`}>{title}</span>
                {
                    isHighlight ? <BsThreeDots className='cursor-pointer' /> :
                        <>
                            <Image src={AiIcon} className='w-8 h-8 -mt-2' alt='aiimage' />
                        </>
                }
            </div>
            <div className='mt-3 flex flex-col grow'>
                <span className='text-accent text-xs'>Feb 12th, 2024</span>
                {isHighlight ? renderHighlightContent(content) : renderNormalContent(content)}
            </div>
            {isHighlight ? renderHighlightFooter() : renderNormalFooter()}
        </div>
    );
};

const renderHighlightContent = (content: string) => (
    <span className='text-3xl font-semibold'>{content}</span>
);

const renderNormalContent = (content: string) => (
    <span className='text-white'>
        Sales revenue increases by <span className='text-secondary'>{content}</span> in one week
    </span>
);

const renderHighlightFooter = () => (
    <div className='flex items-center gap-2 text-sm mt-3'>
        <IoTrendingUp className='text-green-600' />
        <span>
            <span className='text-green-600 font-semibold'>+35%</span> from last month
        </span>
    </div>
);

const renderNormalFooter = () => (
    <div className='flex items-center gap-1 mt-3'>
        <span className='text-accent text-xs'>See Statistics</span>
        <FaChevronRight className='text-accent' size={10} />
    </div>
);

export default InfoCard;
