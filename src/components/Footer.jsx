import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="flex flex-col mt-[150px] mb-[30px] mx-[20px]">
        <div className="flex flex-row justify-center md:justify-between m-[5px] md:m-5">
            <div className="flex flex-row">
                <img src={logo} alt="Logo" className='w-[10px] h-[10px] md:w-[12px] md:h-[12px] md:mx-1' />
                <h1 className='font-dmsans text-[18px] mr-[30px] msmaller:text-[20px] md:text-[32px] leading-[42px] font-[400] text-people-lemon xsmaller:mr-[80px] mxsmaller:mr-[120px]'>VETA</h1>
            </div>
            <div className="flex flex-row">
                <button className="font-dmsans  text-[9px] leading-[14px] msmaller:text-[12px] md:file:text-[16px] msmaller:leading-[21px] font-[400] text-signup-lemon mx-3">About</button>
                <button className="font-dmsans text-[9px] leading-[14px] msmaller:text-[12px] md:file:text-[16px] msmaller:leading-[21px] font-[400] text-signup-lemon mx-3">Company</button>
                <button className="font-dmsans text-[9px] leading-[14px] msmaller:text-[12px] md:file:text-[16px] msmaller:leading-[21px] font-[400] text-signup-lemon mx-3">Support</button>
                <button className="font-dmsans text-[9px] leading-[14px] msmaller:text-[12px] md:file:text-[16px] msmaller:leading-[21px] font-[400] text-signup-lemon mx-3">Movement</button>
            </div>
        </div>
        <div className="flex justify-center  md:mx-[20px]">
        <div className="border-b-[1px] border-white w-[100%] ">
        </div>
        </div>
        <div className="flex flex-row justify-center md:justify-between mt-[15px] m-[5px] md:m-5">
            <div>
                <p className="font-dmsans text-[8px] leading-[12px]  msmaller:text-[10px] md:text-[14px] msmaller:leading-[18px] font-[400] text-footer mr-[30px] xsmaller:mr-[85px] mxsmaller:mr-[120px] md:mx-[5px]">copyright@vetagroups2022</p>
            </div>
            <div className="flex flex-row">
                <p className="font-dmsans  text-[8px] leading-[12px] msmaller:text-[10px] md:text-[14px] msmaller:leading-[18px] font-[400] text-footer mx-[4px] md:mx-[5px]">Terms and conditions</p>
                <p className="font-dmsans  text-[8px] leading-[12px] msmaller:text-[10px] md:text-[14px] msmaller:leading-[18px] font-[400] text-footer mx-[4px] md:mx-[5px]">Privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer