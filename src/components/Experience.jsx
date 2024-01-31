import React, { useState, useEffect } from 'react'
import ExperienceCard from './ExperienceCard'
import EditExperienceCard from './EditExperienceCard'
import { MdAdd } from 'react-icons/md'

const dummyExperiences = [
    // {
    //     id: 1,
    //     title: 'Software Engineer',
    //     company: 'Google',
    //     location: 'Mountain View, CA',
    //     from: '2019',
    //     to: 'Present',
    //     current: true,
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.'
    // },
]

const Experience = () => {
    const [experiences, setExperiences] = useState(dummyExperiences)
    const [addNew, setAddNew] = useState(false)

    useEffect(() => {
        localStorage.getItem('experiences') ? setExperiences(JSON.parse(localStorage.getItem('experiences'))) : setExperiences(dummyExperiences)
    }, [])


    return (
        <div className='flex flex-col w-full my-3'>
            <p className='text-violet-500 text-sm font-bold py-3 bg-violet-100 px-2 rounded'>Experience</p>
            <div className='flex flex-col mt-3 space-y-3'>
                {
                    experiences.length > 0 ? (
                        experiences.map((experience, index) => (
                            <ExperienceCard key={experience.title} experience={experience} index={index} />
                        ))
                    ) : (
                        <div className='text-sm text-center w-full items-center flex justify-center'>
                            <div className='m-3 p-3 bg-violet-200 rounded-full'>

                                <MdAdd size={16} className='w-5 h-5 text-violet-500 top-0 cursor-pointer' onClick={() => setAddNew(true)} />
                            </div>
                        </div>
                    )
                }

            </div>
            {
                addNew && <EditExperienceCard index={0} setFlag={setAddNew} />
            }

        </div>
    )
}

export default Experience