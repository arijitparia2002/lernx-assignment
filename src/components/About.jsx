import React, { useState, useEffect } from 'react'
import { CiEdit } from 'react-icons/ci'


const About = () => {
  const [about, setAbout] = useState('')
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    localStorage.getItem('about') ? setAbout(localStorage.getItem('about')) : setAbout('Add a bio')
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <div className='text-sm'>{about}</div>
        <div className='text-sm font-semibold'>
          <CiEdit size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' onClick={() => setEdit((prev) => !prev)} />
        </div>
      </div>
    </div>
  )
}

export default About