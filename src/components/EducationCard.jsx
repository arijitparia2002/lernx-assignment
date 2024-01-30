import React from 'react'
import { MdAdd, MdEdit } from 'react-icons/md'
import { BiBuildingHouse } from "react-icons/bi";

const EducationCard = ({ education }) => {
    return (
        <div className='flex flex-col' key={education.title}>
            <div className='flex flex-row justify-between'>
                <div className='text-sm font-semibold flex flex-row justify-center items-start'>
                    <div className='p-2 rounded-full bg-violet-200 mt-1'>
                        <BiBuildingHouse size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='ml-1'>{education.title}</span>
                        <span className='ml-1 font-normal text-[10px] text-violet-600'>{education.from} - {education.to}</span>
                        <div className='text-xs text-opacity-50 text-violet-500 '>{education.institution}, {education.location}</div>
                        <div className='text-xs text-violet-500'>{education.description}</div>
                    </div>
                </div>
                <div className='text-sm font-semibold flex flex-row'>
                    <MdAdd size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' />
                    <MdEdit size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default EducationCard