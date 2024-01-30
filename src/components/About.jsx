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
      {
        edit && (
          <div className='flex flex-col absolute items-center px-4 py-2 bg-white rounded-lg backdrop-blur w-1/2 h-1/2'>
            <textarea className='w-full p-2 border border-gray-300 rounded-lg resize-none' value={about} rows={5} onChange={(e) => setAbout(e.target.value)} />
            <div className='flex flex-row justify-end'>
              <button className='px-2 py-1 my-2 mr-2 bg-violet-500 text-white rounded hover:bg-violet-600' onClick={() => { localStorage.setItem('about', about); setEdit((prev) => !prev) }}>Save</button>
              <button className='px-2 py-1 my-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400' onClick={() => setEdit((prev) => !prev)}>Cancel</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default About