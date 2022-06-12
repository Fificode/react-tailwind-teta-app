import React from 'react'

const Feature = ({image, text}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] h-[300px] rounded-[30px] m-2 cursor-pointer  hover:bg-signup-lemon hover:animate-scale_up_center'>
       <div className="w-[56px] h-[56px] bg-signup-lemon rounded-[8px] flex justify-center items-center"><img src={image} alt="Feature" className='w-[20px] h-[15px]' /></div>
<p className='text-white text-center my-2'>{text}</p>
    </div>
  )
}

export default Feature