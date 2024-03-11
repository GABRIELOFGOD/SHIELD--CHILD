import React from 'react'

const BlogCard = ({image, content}) => {
  return (
    <div className='md:w-[30%] w-full shadow-md'>
        <div className="w-full h-[200px] overflow-hidden"><img className='relative w-full' src={image} alt="blog-image" /></div>
        <p className="text-sm p-3">{content}</p>
    </div>
  )
}

export default BlogCard