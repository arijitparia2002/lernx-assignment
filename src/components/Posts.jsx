import React from 'react'
import { CiEdit, CiShare1, CiStopwatch } from 'react-icons/ci'
import { FaComment, FaThumbsUp } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'

const posts = [
  {
    caption: "This is a post caption 1",
    author: "John Doe",
    date: "1 day ago",
    likes: 10,
    comments: 5,
    image: "https://picsum.photos/seed/1/200/300",
    authorImage: "https://picsum.photos/seed/1/200/300"
  },
  {
    caption: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    author: "Steven Smith",
    date: "2 days ago",
    likes: 20,
    comments: 10,
    image: "https://picsum.photos/seed/2/200/300",
    authorImage: "https://picsum.photos/seed/2/200/300"
  },

]

const Posts = () => {
  return (

    <div className='flex flex-col justify-center items-center mt-3 overflow-y-auto h-full space-y-3'>
      {
        posts.map(post => (
          <div className='w-full h-auto bg-white'>
            <div className='flex flex-row justify-between items-center w-full'>
              <div className='flex flex-row justify-start items-center'>
                <img src={post.authorImage} alt="" className='w-10 h-10 rounded-full object-cover' />
                <div className='ml-2'>
                  <div className='text-sm font-semibold'>{post.author}</div>
                  <div className='flex flex-row justify-start items-center'>
                    <CiStopwatch className='w-4 h-4 mr-1' />
                    <div className='text-xs text-gray-500'>{post.date}</div>
                  </div>
                </div>
              </div>
              <div className='text-sm flex flex-row font-semibold text-violet-500'>
                <CiEdit className='w-5 h-5 mr-1' />
                <MdDelete className='w-5 h-5' />
              </div>
            </div>
            <div className='w-full'>
              <div className='text-sm font-semibold ml-6 my-3'>{post.caption}</div>
            </div>
            <div className='w-full h-1/2'>
              <img src={post.image} alt="" className='w-full max-h-28 object-cover rounded-sm' />
            </div>
            <div className='w-full h-1/2 p-4 flex flex-col justify-between items-start'>
              <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-row justify-start items-center'>
                  <FaThumbsUp className='w-4 h-4 mr-1 text-violet-400' />
                  <div className='text-sm font-semibold text-violet-500 mr-3'>{post.likes}</div>
                  <FaComment className='w-4 h-4 ml-2 mr-1 text-violet-400' />
                  <div className='text-sm font-semibold text-violet-500 mr-3'>{post.comments}</div>
                  <CiShare1 className='w-4 h-4 ml-2 mr-1 text-violet-400' />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default Posts