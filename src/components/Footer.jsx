import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="flex flex-col mt-[150px] mb-[30px] mx-[20px]">
        <div className="flex justify-between m-5">
            <div className="flex flex-row">
                <img src={logo} alt="Logo" className='w-[12px] h-[12px] mx-1' />
                <h1 className='font-dmsans text-[32px] leading-[42px] font-[400] text-people-lemon'>VETA</h1>
            </div>
            <div className="flex flex-row">
                <button className="font-dmsans text-[16px] leading-[21px] font-[400] text-signup-lemon mx-3">About</button>
                <button className="font-dmsans text-[16px] leading-[21px] font-[400] text-signup-lemon mx-3">Company</button>
                <button className="font-dmsans text-[16px] leading-[21px] font-[400] text-signup-lemon mx-3">Support</button>
                <button className="font-dmsans text-[16px] leading-[21px] font-[400] text-signup-lemon mx-3">Movement</button>
            </div>
        </div>
        <div className="flex justify-center mx-[20px]">
        <div className="border-b-[1px] border-white w-[100%] ">
        </div>
        </div>
        <div className="flex justify-between m-5">
            <div>
                <p className="font-dmsans text-[14px] leading-[18px] font-[400] text-footer mx-2">copyright@vetagroups2022</p>
            </div>
            <div className="flex flex-row">
                <p className="ont-dmsans text-[14px] leading-[18px] font-[400] text-footer mx-2">Terms and conditions</p>
                <p className="ont-dmsans text-[14px] leading-[18px] font-[400] text-footer mx-2">Privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer