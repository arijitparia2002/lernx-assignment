import React from 'react'

const CommunityCard = ({ title, member }) => (
  <div className="flex flex-row space-x-1 items-center hover:bg-violet-200 mx-2 p-2 rounded cursor-pointer w-[100%] justify-start">
    <img src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" alt="avater" className='w-[30px] h-[30px] rounded-full' />
    <div className="flex flex-col justify-center space-y-0 items-start">
      <div className='font-bold text-violet-600 text-xs'>{title}</div>
      <div className='text-violet-400 text-[10px]'>{member} members</div>
    </div>
  </div>
)


const CommunityFeed = () => {
  return (
    <div className='w-full px-2 items-center'>
      <div className=" flex flex-col justify-start items-start pb-8  w-[80%]">
        <h3 className=' text-base py-4 text-violet-600 font-semibold'>Communities Feed</h3>
        <CommunityCard title='Software dev X' member='1200' />
        <CommunityCard title='MLOps Pro' member='1300' />
        <CommunityCard title='Gen Ai India' member='3100' />
      </div>
    </div>
  )
}

export default CommunityFeed;