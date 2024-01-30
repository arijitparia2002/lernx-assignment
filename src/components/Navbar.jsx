import React from 'react'
import react from "../assets/react.svg"
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import me from "../assets/me.png"

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between py-2 w-full'>
      <div className='flex flex-row items-center'>
        <img src={react} alt="react logo" className='w-[21px] h-[21px] mr-1' />
        <span className='text-[16px] font-semibold'>Spehre</span>
      </div>
      <div className='w-1/3 flex flex-row space-x-1 items-center justify-end pr-2'>
        <div className='flex flex-row space-x-1 items-center rounded border border-solid border-violet-600 h-[32px]'>
          <IoIosSearch className='text-[18px] text-violet-600 mx-2' />
          <div className='border-r border-solid border-violet-400 h-[24px]'></div>
          <input type="text" placeholder='Search' className='bg-transparent text-[16px] w-full outline-none' />
        </div>
        <div className='flex flex-row space-x-1 items-center rounded border border-solid border-violet-600 h-[32px] w-[32px] justify-center'>
          <IoMdNotificationsOutline className='text-[18px] text-violet-600 b' />
        </div>
        <div className='flex flex-row space-x-1 items-center rounded border border-solid border-violet-600 h-[32px] w-[32px] justify-center'>
          <CiMail className='text-[18px] text-violet-600 ' />

        </div>
        <div className='flex flex-row space-x-1 items-center border border-solid border-violet-600 h-[35px] w-[35px] justify-center rounded-full object-contain'>
          <img src={me} alt="profile image"
            className='h-[35px] w-[35px] rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Navbar