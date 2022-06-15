import React from 'react'
import bgimagetwo from '../assets/landingimgtwo.png'
import charticon from '../assets/baricontwo.png'
import charticontwo from '../assets/baricon.svg'
import greendot from '../assets/greendot.png'
import blackdot from '../assets/blackdottwo.svg'

const Commitment = () => {
  return (
    <div className='flex flex-col mt-[80px] mb-[40px] md:flex-row '>
<div className="flex justify-center items-center flex-1 mr-[60px] lg:mt-[60px]">
    <div className="greenbgtwo">
    <img src={bgimagetwo} alt="Background" className='w-[100%] h-[100%] ' />
    </div>
</div>
<div className="flex items-start justify-center flex-1 flex-col mx-[15px] large:mt-[50px] sm:mx-[30px] sm:mt-[80px] ">
    <h1 className='md:text-[56px]  text-[48px] font-[700] leading-[50px] text-white w-[290px] md:w-[504px]'>Commitment we’ve<span className='text-signup-lemon'> developed</span></h1>
    <p className="text-white text-[16px] font-[400] my-[30px] tracking-[0.02em]  w-[290px] md:w-[504px]">We believe responsible development is something we can always work on, responsible design exists to develop a more organized world which leads to better interactions.</p>
    <div className="flex flex-row items-center w-[280px] md:w-[504px] h-[88px] border-[1px] border-white rounded-[10px] bg-commit-bg">
        <div className="w-[25px] h-[25px] bg-signup-lemon flex justify-center items-center rounded-[7px] ml-[10px]">
            <img src={charticon} alt="chart icon" className='w-[15px] h-[15px] bg-signup-lemon' />
        </div>
        <h2 className='text-white text-[18px] md:text-[24px] font-[400] leading-[31px] mx-[20px]'>Immersive learning system</h2>
        <img src={greendot} alt="Green dot" className='w-[8px] h-[8px] mr-[5px] md:ml-[120px]' />
    </div>
    <div className="flex flex-row items-center w-[280px] md:w-[504px] h-[176px] border-[1px] border-white rounded-[10px] bg-signup-lemon my-[20px]">
    <img src={charticontwo} alt="chart icon" className='w-[30px] h-[30px] -translate-y-[60px] ml-[5px] md:-translate-y-[40px]  md:ml-[10px] rounded-[5px]' />
         <div className="flex flex-col items-center">
        <h2 className='text-black text-[19px] md:text-[24px] font-[700] leading-[31px] md:mr-[95px]'>Responsible Research</h2>
        <p className="text-[14px] md:text-[16px] leading-[21px] font-[400] text-black my-[5px] ml-[20px] md:my-[15px] md:ml-[53px]">To ensure we’re building active learning experiences using innovative technologies, we’re working with universities and investing in research</p>
        </div>
        <img src={blackdot} alt="black dot" className='w-[9px] h-[9px] -translate-y-[55px] mr-[5px] md:mr-[20px] md:-translate-y-[50px] ' />
    </div>
    <div className="flex flex-row items-center w-[280px] md:w-[504px] h-[88px] border-[1px] border-white rounded-[10px] bg-commit-bg">
        <div className="w-[25px] h-[25px] bg-signup-lemon flex justify-center items-center rounded-[7px] ml-[10px]">
            <img src={charticon} alt="chart icon" className='w-[15px] h-[15px] bg-signup-lemon' />
        </div>
        <h2 className='text-white text-[18px] md:text-[24px] font-[400] leading-[31px] mx-[20px]'>Responsible Innovation</h2>
        <img src={greendot} alt="Green dot" className='w-[8px] h-[8px] mr-[5px] md:ml-[157px]' />
    </div>
</div>
    </div>
  )
}

export default Commitment