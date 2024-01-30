import React, { useEffect, useState } from 'react'
import EducationCard from './EducationCard'

const dummyEducations = [
    {
        title: 'BSc Computer Science',
        from: '2014',
        to: '2018',
        institution: 'University of Lagos',
        location: 'Lagos, Nigeria',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
    },
    {
        title: 'BSc Computer Science',
        from: '2014',
        to: '2018',
        institution: 'University of Lagos',
        location: 'Lagos, Nigeria',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
    }
]

const Education = () => {
    const [educations, setEducations] = useState(dummyEducations)
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        localStorage.getItem('educations') ? setEducations(JSON.parse(localStorage.getItem('educations'))) : setEducations(dummyEducations)
    }, [])

    return (
        <div className='flex flex-col w-full my-3'>
            <p className='text-violet-500 text-sm font-bold py-3 bg-violet-100 px-2 rounded'>Experience</p>
            <div className='flex flex-col mt-3 space-y-3'>
                {
                    educations.length > 0 ? (
                        educations.map((education) => (
                            <EducationCard key={education.id} education={education} />
                        ))
                    ) : (
                        <div className='text-sm'>No education added</div>
                    )
                }

            </div>

        </div>
    )
}

export default Education