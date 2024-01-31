import React, { useState } from 'react'
import { About, Skills, Posts, Spaces } from '../components'

const options = ["About", "Skills & Certifications", "Posts", "Spaces"]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className='sm:px-2 px-0 mt-3 rounded bg-white w-[100%] shadow flex flex-col pb-12 sm:pb-0'>
      <div className='w-full px-6 border-b border-violet-200 h-10 flex flex-row justify-between items-center text-violet-500 font-semibold'>
        {
          options.map((option, index) => (
            <div className={`text-sm px-4 cursor-pointer h-full items-center flex justify-center ${index === activeTab && "border-b-2  border-violet-500"}`} onClick={() => setActiveTab(index)}>{option}</div>
          ))
        }
      </div>
      <div className='w-full h-full sm:p-2'>
        {
          activeTab === 0 && <div className='px-2'><About /></div>
        }
        {
          activeTab === 1 && <div className='px-2'><Skills /></div>
        }
        {
          activeTab === 2 && <div className='px-2'><Posts /></div>
        }
        {
          activeTab === 3 && <div className='px-2'><Spaces /></div>
        }
      </div>
    </div>
  )
}

export default Tabs