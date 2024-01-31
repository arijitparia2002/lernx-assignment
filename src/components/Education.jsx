import React, { useEffect, useState } from 'react'
import EducationCard from './EducationCard'
import { MdAdd } from 'react-icons/md'
import EditEducationCard from './EditEducationCard'

const dummyEducations = [
    // {
    //     title: 'BSc Computer Science',
    //     from: '2014',
    //     to: '2018',
    //     institution: 'University of Lagos',
    //     location: 'Lagos, Nigeria',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
    // },
    // {
    //     title: 'BSc Computer Science',
    //     from: '2014',
    //     to: '2018',
    //     institution: 'University of Lagos',
    //     location: 'Lagos, Nigeria',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
    // }
]

const Education = () => {
    const [educations, setEducations] = useState(dummyEducations)
    const [addNew, setAddNew] = useState(false)

    useEffect(() => {
        localStorage.getItem('educations') ? setEducations(JSON.parse(localStorage.getItem('educations'))) : setEducations(dummyEducations)
    }, [])

    return (
        <div className='flex flex-col w-full my-3'>
            <p className='text-violet-500 text-sm font-bold py-3 bg-violet-100 px-2 rounded'>Education</p>
            <div className='flex flex-col mt-3 space-y-3'>
                {
                    educations.length > 0 ? (
                        educations.map((education, index) => (
                            <EducationCard key={education.title} education={education} index={index} />
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
                addNew && <EditEducationCard index={0} setFlag={setAddNew} />
            }

        </div>
    )
}

export default Education