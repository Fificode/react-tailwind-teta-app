import React from 'react'
import bgimagetwo from '../assets/landingimgtwo.png'
import charticon from '../assets/baricontwo.png'
import greendot from '../assets/greendot.png'
import blackdot from '../assets/blackdottwo.svg'


const Commitment = () => {
  return (
    <div className='flex flex-col mt-[80px] mb-[40px] lg:flex-row '>
<div className="flex justify-center items-center flex-1 mx-[20px] lg:mr-[60px] lg:mt-[60px]">
    <div className="greenbgtwo">
    <img src={bgimagetwo} alt="Background" className='w-[100%] h-[100%] xxlarge:mx-3 ' />
    </div>
</div>
<div className="flex items-start justify-center flex-1 flex-col mx-[15px] large:mt-[50px] sm:mx-[30px] sm:mt-[80px] ">
    <h1 className='md:text-[56px]  text-[48px] font-[700] leading-[50px] text-white w-[290px] font-syne md:w-[504px]'>Commitment we’ve<span className='text-signup-lemon'> developed</span></h1>
    <p className="text-white text-[16px] font-[400] my-[30px] tracking-[0.02em] font-dmsans w-[290px] md:w-[504px]">We believe responsible development is something we can always work on, responsible design exists to develop a more organized world which leads to better interactions.</p>
    <div className="flex flex-row items-center w-[280px] h-[78px] md:w-[504px] md:h-[88px] border-[1px] border-white rounded-[10px] bg-feature-bg">
        <div className="md:w-[25px] w-[23px] h-[20px] md:h-[25px] bg-signup-lemon flex justify-center items-center rounded-[5px] ml-[13px]">
            <img src={charticon} alt="chart icon" className='w-[13px] h-[13px] md:w-[15px] md:h-[15px] bg-signup-lemon' />
        </div>
        <h2 className='text-white text-[18px] md:text-[24px] font-[400] font-dmsans leading-[31px] mx-[20px]'>Immersive learning system</h2>
        <img src={greendot} alt="Green dot" className='w-[8px] h-[8px] mr-[5px] md:ml-[115px]' />
    </div>
    <div className="flex flex-row items-center w-[280px] md:w-[504px] h-[176px] border-[1px] border-white rounded-[10px] bg-signup-lemon my-[20px]">
        <div className="w-[86px] h-[21px] md:w-[65px] md:h-[28px] bg-black flex justify-center items-center rounded-[5px] -translate-y-[58px] ml-[10px] md:-translate-y-[45px] md:ml-[10px]">
            <svg  viewBox="0 0 512 512" className='w-[13px] h-[13px] md:w-[15px] md:h-[15px] fill-signup-lemon'><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
        </div>
         <div className="flex flex-col items-center">
        <h2 className='text-black text-[19px] md:text-[24px] font-[700] leading-[31px] font-dmsans md:mr-[135px]'>Responsible Research</h2>
        <p className="text-[14px] md:text-[16px] leading-[21px] font-[400] text-black font-dmsans my-[5px] ml-[20px] md:my-[15px] md:ml-[23px]">To ensure we’re building active learning experiences using innovative technologies, we’re working with universities and investing in research</p>
        </div>
        <img src={blackdot} alt="black dot" className='w-[9px] h-[9px] -translate-y-[57px] mr-[5px] md:mr-[16px] md:-translate-y-[50px] ' />
    </div>
    <div className="flex flex-row items-center w-[280px] h-[58px] md:w-[504px] md:h-[88px] border-[1px] border-white rounded-[10px] bg-feature-bg">
        <div className="w-[21px] h-[20px] md:w-[25px] md:h-[25px] bg-signup-lemon flex justify-center items-center rounded-[5px] ml-[12px]">
            <img src={charticon} alt="chart icon" className='w-[13px] h-[13px] md:w-[15px] md:h-[15px] bg-signup-lemon' />
        </div>
        <h2 className='text-white text-[18px] md:text-[24px] font-[400] leading-[31px] mx-[20px] font-dmsans'>Responsible Innovation</h2>
        <img src={greendot} alt="Green dot" className='w-[8px] h-[8px] mr-[5px] md:ml-[155px]' />
    </div>
</div>
    </div>
  )
}

export default Commitment