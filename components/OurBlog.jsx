import React from 'react'
import { blogs } from '../utils/constants';
const stop ="/images/stop.png"

const OurBlog = () => {
  return (
    <div className=''>
      <div className="font-bold text-3xl md:text-5xl text-center mb-8">
        Explore Our Blog
      </div>
      <div className="flex shadow-md flex-col md:flex-row gap-5">
        {
          blogs?.map((item, i) => (
            <div key={i} className="md:w-[404px] w-full h-fit md:h-[389px] rounded-md">
              <img src={stop} alt="stop-image" className="md:h-[310px] w-full" />
              <div className="p-3">
                <span className="font-light text-base">
                  {item.context}
                </span>
              </div>
            </div>
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
      <div className='flex justify-center items-center'>
        <button className="border text-primary py-[10px] px-[16px]">see more</button>
      </div>
    </div>
  );
}

export default OurBlog