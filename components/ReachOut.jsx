import React from 'react'
import { reactOut } from '../utils/constants'
import { Link } from 'react-router-dom'

const ReachOut = () => {
  return (
    <div className='my-6 md:my-10'>
        <p className="text-center text-xl font-bold">Reach Out</p>
        <p className="text-xs text-center text-lightBlack">You can reach us through the following platforms</p>
        <div className='flex flex-col md:flex-row gap-5 justify-between my-10 '>
            {
                reactOut?.map((item, i) => (
                    <Link className='flex flex-col gap-2 items-center justify-center' to={item.path} key={i}>
                        <span className='text-xl bg-primary text-white p-2 rounded-full'>{item.icon}</span>
                        <p className='text-sm'>{item.content}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default ReachOut