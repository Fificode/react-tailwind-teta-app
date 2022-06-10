import React from 'react'

const Feature = (image, text) => {
  return (
    <div className=''>
       <div className="w-[56px] h-[56px] bg-signup-lemon rounded-[8px] flex justify-center items-center"><img src={image} alt="Features" /></div>
<p>{text}</p>
    </div>
  )
}

export default Feature