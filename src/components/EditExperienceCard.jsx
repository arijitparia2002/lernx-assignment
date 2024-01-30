import { useState } from "react"

const EditExperienceCard = ({ setFlag, index, experience = null }) => {
    const [title, setTitle] = useState(experience?.title || '')
    const [from, setFrom] = useState(experience?.from || '')
    const [to, setTo] = useState(experience?.to || '')
    const [institution, setInstitution] = useState(experience?.institution || '')
    const [location, setLocation] = useState(experience?.location || '')
    const [description, setDescription] = useState(experience?.description || '')

    const handleSave = () => {
        const newexperience = { title, from, to, institution, location, description }
        let experiences = JSON.parse(localStorage.getItem('experiences'))
        if (experiences) {
            experiences[index] = newexperience
        } else {
            experiences = [newexperience]
        }
        localStorage.setItem('experiences', JSON.stringify(experiences))
        setFlag(false)
        window.location.reload()
    }

    const handleCancel = () => {
        setFlag(false)
    }

    const handleDelete = () => {
        let experiences = JSON.parse(localStorage.getItem('experiences'))
        experiences.splice(index, 1)
        localStorage.setItem('experiences', JSON.stringify(experiences))
        setFlag(false)
        window.location.reload()
    }

    const handleCreateNew = () => {
        const newexperience = { title, from, to, institution, location, description }
        let experiences = JSON.parse(localStorage.getItem('experiences'))
        if (experiences) {
            experiences.push(newexperience)
        } else {
            experiences = [newexperience]
        }
        localStorage.setItem('experiences', JSON.stringify(experiences))
        setFlag(false)
        window.location.reload()
    }


    return (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur'>
            {/* editable input + date selection field for everything */}
            <div className='flex flex-col p-4 rounded bg-white w-1/2 h-auto'>
                <label htmlFor='title' className='text-sm text-violet-500'>Title</label>
                <input type='text' id='title' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor='from' className='text-sm text-violet-500'>From</label>
                <input type='date' id='from' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={from} onChange={(e) => setFrom(e.target.value)} />
                <label htmlFor='to' className='text-sm text-violet-500'>To</label>
                <input type='date' id='to' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={to} onChange={(e) => setTo(e.target.value)} />
                <label htmlFor='institution' className='text-sm text-violet-500'>Company</label>
                <input type='text' id='institution' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={institution} onChange={(e) => setInstitution(e.target.value)} />
                <label htmlFor='location' className='text-sm text-violet-500'>Location</label>
                <input type='text' id='location' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={location} onChange={(e) => setLocation(e.target.value)} />
                <label htmlFor='description' className='text-sm text-violet-500'>Description</label>
                <textarea id='description' className='border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-violet-500' value={description} onChange={(e) => setDescription(e.target.value)} />
                <div className="flex flex-row space-x-3 my-3 items-center justify-center w-[80%]">
                    {
                        experience ? (
                            <button onClick={handleDelete} className="px-2 py-1 rounded border border-violet-400 border-solid">Delete</button>
                        ) : (
                            <button onClick={handleCancel} className="px-2 py-1 rounded border border-violet-400 border-solid">Cancel</button>
                        )
                    }
                    <button onClick={experience ? handleSave : handleCreateNew} className="px-2 py-1 rounded bg-violet-400">Save</button>
                </div>
            </div>





        </div>
    )
}

export default EditExperienceCard