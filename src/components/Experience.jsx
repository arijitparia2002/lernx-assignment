import React, { useState, useEffect } from 'react'
import ExperienceCard from './ExperienceCard'

const dummyExperiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Google',
        location: 'Mountain View, CA',
        from: '2019',
        to: 'Present',
        current: true,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.'
    },
]

const Experience = () => {
    const [experiences, setExperiences] = useState(dummyExperiences)

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
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))
                    ) : (
                        <div className='text-sm'>No experience added</div>
                    )
                }

            </div>

        </div>
    )
}

export default Experience