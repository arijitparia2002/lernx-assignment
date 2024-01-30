import React from 'react'
import { FaCirclePlus, FaDropbox, FaGithub } from "react-icons/fa6";
import { SiSlack } from 'react-icons/si';

const Links = () => {
  return (
    <div className='px-2'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row justify-between items-center w-full'>
          <p className='text-[10px] font-bold text-violet-500'>Online Links</p>
          <FaCirclePlus size={16} className='text-violet-600'/>
        </div>
        <p className='text-[7px] text-violet-400 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        <div className='w-full py-4 rounded bg-violet-200 bg-opacity-45 flex flex-row space-x-3 text-violet-600 items-center text-sm justify-center mt-2'>
          <FaDropbox/>
          <SiSlack/>
          <FaGithub/>
        </div>
      </div>
    </div>
  )
}

export default Links