import React from 'react';
import BlogCollection from '../components/BlogCollection';
const background ="/images/background.png"

const Blog = () => {
  return (
    <div className="md:pt-mid pb-tip px-6 md:px-mid">
      {/* <div className="relative flex flex-col items-center justify-center">
        <div className="bg-primary md:h-[520px] w-full rounded-3xl md:pt-16 md:pl-28">
          <img
            src={background}
            alt="background-image"
            className="absolute inset-x-0 bottom-0 w-full"
          />
          <h1 className="text-white text-5xl font-bold">
            Welcome to Zerab report
          </h1>
          <p className="font-normal text-md text-[#E6E6E6]">
            Get the most recent information about report of online abuse
          </p>
          <div className="flex gap-8 mt-32">
            <form className="flex md:w-[579px]" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Enter email address"
                className="w-full outline-none pl-5 pr-32 text-sm text-black rounded-md h-[35px] py-5"
                type="text"
              />
            </form>
            <button className="bg-gold rounded-md px-4 ">Subscribe</button>
          </div>
        </div>
      </div> */}
      <BlogCollection/>
    </div>
  );
}

export default Blog