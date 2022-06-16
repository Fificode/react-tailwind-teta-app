import React from 'react'

const Feature = ({ text, viewbox, direction}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] h-[300px] rounded-[30px] m-2 cursor-pointer group hover:bg-signup-lemon hover:animate-move_forward'>
       <div className="w-[56px] h-[56px] bg-signup-lemon rounded-[8px] flex justify-center items-center group-hover:bg-black">
         <svg className='w-[25px] h-[25px] group-hover:fill-signup-lemon' viewBox={viewbox}>
           <path d={direction} />
         </svg>
         </div>
<p className='text-white text-center my-2 group-hover:text-black'>{text}</p>
    </div>
  )
}

export default Feature