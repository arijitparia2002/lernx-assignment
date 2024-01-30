import React from 'react'
import { MdAdd, MdEdit } from 'react-icons/md'
import { FaBuilding } from "react-icons/fa";

const ExperienceCard = ({ experience }) => {
    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex flex-row justify-between'>
                <div className='text-sm font-semibold flex flex-row justify-center items-start'>
                    <div className='p-2 rounded-full bg-violet-200 mt-1'>
                        <FaBuilding size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='ml-1'>{experience.title}</span>
                        <span className='ml-1 font-normal text-[10px] text-violet-600'>{experience.from} - {experience.to}</span>
                        <div className='text-xs text-opacity-50 text-violet-500 '>{experience.company}, {experience.location}</div>
                        <div className='text-xs text-violet-500'>{experience.description}</div>
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

export default ExperienceCard