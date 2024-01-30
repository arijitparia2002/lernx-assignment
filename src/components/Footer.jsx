import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center text-violet-500 font-semibold space-y-3 absolute bottom-0 pb-4 px-2'>
      <div className='flex flex-row space-x-2'>
        <p className='text-xs'>About</p>
        <p className='text-xs'>Accessability</p>
        <p className='text-xs'>Help</p>
      </div>
      <div className='flex flex-row space-x-2'>
        <p className='text-xs'>Privacy & Terms</p>
        <p className='text-xs'>Advertise</p>
        <p className='text-xs'>more</p>
      </div>
      <div className='text-xs'>
        <span className='font-bold text-xs'>Spehre.io</span> © 2023
      </div>
    </div>
  )
}

export default Footer