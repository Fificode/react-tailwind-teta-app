import React from 'react'
import landingimage from '../assets/bgimage.png'
import whitedot from '../assets/whitedot.png'
import playbtn from '../assets/playbtn.png'
import userone from '../assets/userone.png'
import usertwo from '../assets/usertwo.png'
import userthree from '../assets/userthree.png'
import userfour from '../assets/userfour.png'

const Header = () => {
  return (
     
    <div className='flex flex-row xmedium:flex-col md:mt-[100px]'>
      <div className="flex items-start justify-center flex-1 flex-col mx-[15px]  sm:mx-[30px]">
       <h2 className='font-bold text-white tracking-[0.02em] text-[40px] leading-[38px] md:text-[72px] md:leading-[68px] '>
         Let’s explore your own <span className="text-btn-bg">VR</span> world
       </h2>
     <p className='text-white text-[16px] font-normal tracking-[0.02em] mt-[30px] md:text-[18px] md:leading-[27px]'>Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings.</p>
     <div className="flex flex-row mt-[20px]">
       <button className='explore-bg text-black rounded-[10px] px-[20px] py-[2px] text-[13px] msmaller:px-[30px] msmaller:py-[2px] msmaller:text-[14px] md:text-[20px] md:px-[40px] md:py-[15px]'>Explore Now</button>
       <div className='border-[1px] border-solid  border-white rounded-[50%] w-[50px] h-[50px] ml-[20px] mr-[15px] cursor-pointer lsmall:mx-[30px]'>
         <img src={playbtn} alt="Play button" className='translate-x-[18px] translate-y-3' />
       </div>
       <p className='text-white font-[600] text-[12px] cursor-pointer translate-y-3 msmaller:text-[17px] md:text-[20px]'>Learn more</p>
     </div>
     <div className="flex flex-row justify-between mt-[40px]">
       <div className="flex flex-row">
         <img src={userone} alt="user" className='rounded-[50%] w-[36px] h-[36px] lsmall:w-[56px] lsmall:h-[56px] ' />
         <img src={usertwo} alt="user" className='rounded-[50%] w-[36px] h-[36px] lsmall:w-[56px] lsmall:h-[56px] -translate-x-[10px]' />
         <img src={userthree} alt="user" className='rounded-[50%] w-[36px] h-[36px] lsmall:w-[56px] lsmall:h-[56px] -translate-x-[20px]' />
         <img src={userfour} alt="user" className='rounded-[50%] w-[36px] h-[36px] lsmall:w-[56px] lsmall:h-[56px] -translate-x-[30px]' />
       </div>
       <div className='mr-[6px] translate-y-[13px] lsmall:translate-y-[22px]'>
         <img src={whitedot} alt="A white dot" className='w-[10px] h-[10px]' />
       </div>
       <p className='text-people-lemon text-[12px] font-[400] leading-[16px] translate-y-[10px] lsmall:translate-y-[20px]'>400 people online</p>
     </div>
      </div>
     
    
 <div className="flex justify-center items-center flex-1 my-[20px] mx-[30px]  ">
  <div className="greenbgone mt-[40px]">    
 <img src={landingimage} alt="Green background landing page" className='w-[100%] h-[100%] '/> </div>
 </div>
        </div>
    
    
  )
}

export default Header