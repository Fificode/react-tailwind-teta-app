import React from 'react'
import Feature from './Feature'

const Features = () => {
  return (
    <div className='mt-[60px] mb-[20px]'>
       <div className="flex justify-center items-center"> <h1 className='text-[56px] font-[700] leading-[60px] text-center text-white'>Discover the <span className='text-people-lemon'>world</span> based on your likes</h1></div>
        <div className="mx-[30px] mt-[40px] mb-[20px]">
        <div className='border-[1px] border-solid border-white rounded-[30px] w-[100%] h-[620px] '>
        <Feature />
        </div>
        </div>
    </div>
  )
}

export default Features