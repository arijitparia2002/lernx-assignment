import React, { useState, useEffect } from 'react'
import { MdEdit } from 'react-icons/md'
import { Experience, Education } from './'


const About = () => {
  const [about, setAbout] = useState('')
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    localStorage.getItem('about') ? setAbout(localStorage.getItem('about')) : setAbout('Add a bio')
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between px-2 my-1'>
        <div className='text-sm'>{about}</div>
        <div className='text-sm font-semibold'>
          <MdEdit size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' onClick={() => setEdit((prev) => !prev)} />
        </div>
      </div>
      <Experience />
      <Education />
    </div>
  )
}

export default About