import React from 'react'

const Feature = ({image, text}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] h-[300px] rounded-[30px] m-2 cursor-pointer group hover:bg-signup-lemon hover:animate-move_forward'>
       <div className="w-[56px] h-[56px] bg-signup-lemon rounded-[8px] flex justify-center items-center group-hover:bg-black"><img src={image} alt="Feature" className='w-[20px] h-[20px] group-hover:fill-signup-lemon ' /></div>
<p className='text-white text-center my-2 group-hover:text-black'>{text}</p>
    </div>
  )
}

export default Feature