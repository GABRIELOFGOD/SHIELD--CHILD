import React from 'react'
import CountUp from 'react-countup';

const OurReport = () => {
  return (
    <div className='md:py-mid py-10'>
        <p className="font-bold text-[48px] text-secondary text-center">Our Reports</p>
        <div className="md:grid flex flex-col pt-10 grid-cols-2 gap-10">
            <div className="bg-darkBlue text-white text-center p-5 rounded-md">
                <CountUp
                    end={375230}
                    duration={5}
                    start={200000}
                    decimal=','
                    className='md:text-[120px] text-[75px] font-extrabold'
                />
                <p className='text-[30px]'>Report accessed by Zerab Team</p>
            </div>
            <div className="bg-darkBlue text-white text-center rounded-md">
                <CountUp
                    end={275530}
                    duration={5}
                    start={150000}
                    decimal=','
                    className='md:text-[120px] text-[75px] text-gold font-extrabold'
                />
                <p className='text-[25px]'>Report confirmed to  show <span className='text-gold'>Child Abuse</span></p>
            </div>
            <div className="bg-primary text-white text-center p-5 rounded-md">
                <CountUp
                    end={375230}
                    duration={5}
                    start={200000}
                    decimal=','
                    className='md:text-[120px] text-[75px] font-extrabold'
                />
                <p className='text-[30px]'>Report accessed by Zerab Team</p>
            </div>
            <div className="bg-greener text-white text-center p-5 rounded-md">
                <p className='md:text-[120px] text-[75px] font-extrabold'>90%</p>
                <p className='text-[25px]'>Report confirmed to  show <span className='text-gold'>Child Abuse</span></p>
            </div>
        </div>
    </div>
  )
}

export default OurReport