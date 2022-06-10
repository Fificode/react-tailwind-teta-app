import React from 'react'
import landingimage from '../assets/bgimage.png'

const Header = () => {
  return (
    <div>
    <div className='flex flex-row xmedium:flex-col'>
      <div className="flex items-start justify-center flex-1 flex-col mx-[15px] large:mt-[150px] sm:mx-[30px]">
       <h2 className='font-bold text-white tracking-[0.02em] text-[40px] leading-[38px] md:text-[72px] md:leading-[58px] '>
         Let’s explore your own <span className="text-people-lemon">VR</span> world
       </h2>
     <p className='text-white text-[16px] font-normal tracking-[0.02em] mt-[10px] md:text-[18px] md:leading-[27px]'>Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings.</p>
     <div className="flex flex-row mt-[20px]">
       <button className='bg-people-lemon text-black rounded-[10px] px-[20px] py-[2px] text-[13px] msmaller:px-[30px] msmaller:py-[2px] msmaller:text-[14px] md:text-[20px] md:px-[40px] md:py-[15px]'>Explore Now</button>
       <div className='border-[1px] border-solid  border-white rounded-[50%] w-[50px] h-[50px] mx-[30px]'>
         <img src='' alt="Play button" className='translate-x-4 translate-y-3' />
       </div>
       <p className='text-white font-[600] text-[14px] translate-y-3 msmaller:text-[17px] md:text-[20px]'>Learn more</p>
     </div>
      </div>
      <div className="flex justify-center items-center flex-1 my-[20px] mx-[30px] lg:mt-[60px]">
        <img src={landingimage} alt="Landing page" className='w-[100%] h-[100%]'/>
      </div>
    </div>
    </div>
  )
}

export default Header