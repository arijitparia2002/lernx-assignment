import React from 'react'
import { FaInfo } from 'react-icons/fa6'
import { MdInfoOutline } from 'react-icons/md'

const CircularRing = () => {
  return (
    <div className="relative w-20 h-20">
      {/* Outer ring */}
      <div className="absolute w-full h-full bg-violet-500 rounded-full"></div>

      {/* Fill based on percentage */}
      <div className="absolute w-full h-0 bg-white rounded-full" style={{ bottom: '15%', clipPath: 'inset(0 0 30% 0)' }}></div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-sm font-bold">350</span>
        <span className="text-[7px] font-bold">Spehre rating</span>
      </div>
    </div>
  );
};

const WheelOfOpp = () => {
  return (
    <div className='px-2 flex flex-col items-center justify-center p-4 rounded-lg border border-violet-200 bg-violet-200 bg-opacity-45 mt-5 mx-2 sm:h-auto sm:w-auto h-[250px] w-[250px]'>
      <div className='flex flex-row items-center mb-2 justify-center'>
        <span className='text-[10px] font-bold text-violet-500 text-center'>Wheel Of Opportunities</span>
        <MdInfoOutline className='sm:block hidden text-[12px] ml-1 text-violet-700' />
      </div>
      <CircularRing />
    </div>
  )
}

export default WheelOfOpp