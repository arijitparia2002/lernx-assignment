import { useState } from "react"
import { BiArrowToLeft } from "react-icons/bi"
import { Toggle } from "./Profile"

const EditEducationCard = ({ setFlag, index, education = null }) => {
    const [title, setTitle] = useState(education?.title || '')
    const [from, setFrom] = useState(education?.from || '')
    const [to, setTo] = useState(education?.to || '')
    const [institution, setInstitution] = useState(education?.institution || '')
    const [location, setLocation] = useState(education?.location || '')
    const [description, setDescription] = useState(education?.description || '')

    const handleSave = () => {
        const newEducation = { title, from, to, institution, location, description }
        let educations = JSON.parse(localStorage.getItem('educations'))
        if (educations) {
            educations[index] = newEducation
        } else {
            educations = [newEducation]
        }
        localStorage.setItem('educations', JSON.stringify(educations))
        setFlag(false)
        window.location.reload()
    }

    const handleCancel = () => {
        setFlag(false)
    }

    const handleDelete = () => {
        let educations = JSON.parse(localStorage.getItem('educations'))
        educations.splice(index, 1)
        localStorage.setItem('educations', JSON.stringify(educations))
        setFlag(false)
        window.location.reload()
    }

    const handleCreateNew = () => {
        const newEducation = { title, from, to, institution, location, description }
        let educations = JSON.parse(localStorage.getItem('educations'))
        if (educations) {
            educations.push(newEducation)
        } else {
            educations = [newEducation]
        }
        localStorage.setItem('educations', JSON.stringify(educations))
        setFlag(false)
        window.location.reload()
    }


    return (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur'>
            {/* editable input + date selection field for everything */}
            <div className='flex flex-col sm:p-4 rounded bg-white sm:w-1/2 sm:h-auto h-full w-full'>
                <div className='sm:hidden flex flex-row justify-center items-center py-4'>
                    <BiArrowToLeft className=' absolute left-0 text-[28px] text-violet-600 ml-2' onClick={handleCancel} />
                    <p className="font-bold text-center mr-2 pr-3">{education ? "Edit Education" : "Add Education"}</p>

                </div>
                <div className='sm:hidden flex flex-row justify-between py-4 bg-violet-300 items-center px-2 mb-5'>
                    <p className="font-bold text-center ">Notify your network</p>
                    <div>
                        <Toggle />
                    </div>
                </div>
                <div className='flex flex-col p-4 rounded bg-white sm:w-1/2 sm:h-auto h-full w-full'>
                    <label htmlFor='title' className='text-sm text-violet-500'>Title</label>
                    <input type='text' id='title' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor='from' className='text-sm text-violet-500'>From</label>
                    <input type='date' id='from' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={from} onChange={(e) => setFrom(e.target.value)} />
                    <label htmlFor='to' className='text-sm text-violet-500'>To</label>
                    <input type='date' id='to' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={to} onChange={(e) => setTo(e.target.value)} />
                    <label htmlFor='institution' className='text-sm text-violet-500'>Institution</label>
                    <input type='text' id='institution' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={institution} onChange={(e) => setInstitution(e.target.value)} />
                    <label htmlFor='location' className='text-sm text-violet-500'>Location</label>
                    <input type='text' id='location' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={location} onChange={(e) => setLocation(e.target.value)} />
                    <label htmlFor='description' className='text-sm text-violet-500'>Description</label>
                    <textarea id='description' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <div className="flex flex-row space-x-3 my-3 items-center justify-center w-[80%]">
                        {
                            education ? (
                                <button onClick={handleDelete} className="px-2 py-1 rounded border border-violet-400 border-solid">Delete</button>
                            ) : (
                                <button onClick={handleCancel} className="px-2 py-1 rounded border border-violet-400 border-solid">Cancel</button>
                            )
                        }
                        <button onClick={education ? handleSave : handleCreateNew} className="px-2 py-1 rounded bg-violet-400">Save</button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default EditEducationCard