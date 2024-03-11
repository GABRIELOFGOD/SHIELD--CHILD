import React from 'react'
import { blogs } from '../utils/constants';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
const stop ="/images/stop.png"

const OurBlog = () => {
  return (
    <div className=''>
      <div className="font-bold text-3xl md:text-5xl text-center mb-8">
        Explore Our Blog
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-5">
        {
          blogs?.map((item, i) => (
            <BlogCard
              key={i}
              content={item.context}
              image={item.image}
            />
          ))
        }
        {/* <div className="w-[404px] h-[389px] rounded-md">
          <img src={stop} alt="stop-image" className="h-[310px]" />
          <span className="font-light text-base">
            Protecting Our Young: Recognizing Signs of Child Abuse and Taking Action
          </span>
        </div>
        <div className="w-[404px] h-[389px] rounded-md">
          <img src={stop} alt="stop-image" />
          <span className="font-light text-base ">
            Healing from Invisible Wounds: Understanding and Addressing Emotional Abuse
          </span>
        </div> */}
      </div>
      <div className='flex justify-center my-3 items-center'>
        <Link to='blog' className="border text-primary py-[10px] px-[16px]">see more</Link>
      </div>
    </div>
  );
}

export default OurBlog