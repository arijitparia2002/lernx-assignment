import React from 'react'
import me from "../assets/me.png"
import { MdOutlinePeople } from "react-icons/md";

const Profile = () => {
  return (
    <div className='px-2 w-full -translate-y-8'>
      <div className='flex flex-col justify-start items-center'>
        <img src={me} alt="profile image"
          className='h-[80px] w-[80px] rounded-full' />
        <div className='text-sm font-semibold text-center'>
          Arijit Paria
          <p className="text-[9px] text-opacity-70 text-violet-500">
            Software Developer
          </p>
          <div className='w-full flex flex-row text-center justify-center items-center text-violet-600 font-sembold'>
            <MdOutlinePeople size={18} className='text-violet-800' />
            <p className='text-[10px] mr-2'>21 Followers</p>
            <p className='text-[10px]'>100 Following</p>
          </div>
          <div className='w-full flex flex-row text-center justify-center items-center text-violet-600 font-bold'>
            <p className='text-[10px] mt-4'>Make profile visible to employes</p>
          </div>
          <p className=' text-left text-[7px] text-violet-300 leading-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, id.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile