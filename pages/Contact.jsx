import React from 'react';
import ReachOut from '../components/ReachOut';
const phone ="/images/contact us image.png";


const Contact = () => {
  return (
    <div className='px-6 md:px-32 py-10 md:py-20'>
      <div className='flex overflow-hidden rounded-[25px] border-gray-200 border-2'>
        <img className='hidden md:flex' src={phone} alt="" />
        <div className='px-6 py-4 my-auto gap-10 flex flex-col w-full'>
          <p className="text-xl font-bold">Send Message</p>
          <div className='flex flex-col gap-5'>
            <div>
              <p className="text-sm">Full Name:</p>
              <input className='border-gray-300 border-2 w-full rounded-md px-6 h-10' type="text" />
            </div>
            <div>
              <p className="text-sm">Email address:</p>
              <input className='border-gray-300 border-2 w-full rounded-md px-6 h-10' type="text" />
            </div>
            <div>
              <p className="text-sm">Message:</p>
              <textarea className='border-gray-300 h-[100px] border-2 w-full rounded-md px-6'></textarea>
            </div>
          </div>
          <div className="flex w-full justify-end items-end"><button className='py-3 px-20 flex bg-primary text-white rounded-md w-full md:w-fit'>SEND</button></div>
        </div>
      </div>
      <ReachOut />
    </div>
  );
}

export default Contact