import React from 'react'

const Feature = ({image, text}) => {
  return (
    <div className='flex flex-col items-center'>
       <div className="w-[56px] h-[56px] bg-signup-lemon rounded-[8px] flex justify-center items-center"><img src={image} alt="Feature" className='w-[15px] h-[15px]' /></div>
<p className='text-white text-center'>{text}</p>
    </div>
  )
}

export default Feature