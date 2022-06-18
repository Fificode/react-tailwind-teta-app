import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assets/logo.png'

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[60px] z-10 fixed top-0 bg-black-bg  py-[50px]'>
        <div className="w-full h-full flex justify-between items-center">
<div className='flex flex-row pl-[7px]'>
<img src={logo} alt="Logo" className='w-[10px] h-[14px] ml-2 md:w-[12px] md:h-[16px]'/>
<h1 className='text-[28px] font-[400] font-dmsans text-people-lemon tracking-[0.02em] md:text-[32px]'>VETA</h1>
</div>
<ul className='flex large:hidden'>
<li>About us</li>
<li>Our project</li>
<li>Community</li>
<li>Resources</li>
</ul>
<div className="flex pr-[30px] small:hidden">
    <button className='pr-[20px] text-[16px] font-[700] text-white bg-transparent font-dmsans hover:text-signup-lemon'>Sign In</button>
    <button className='px-[30px] py-[10px] border-[1px] border-solid border-signup-lemon rounded-[10px] text-signup-lemon text-[16px] font-[700] bg-black-bg font-dmsans hover:text-people-lemon'>Sign Up</button>
</div>
<div className="xlarge:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-signup-lemon m-2' /> : <XIcon className='w-10 text-signup-lemon m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full h-[350px] px-[10px] mt-[50px] bg-black-bg animate-scale_up_tr md:h-[auto]'}>
<li className='w-full'>About us</li>
<li className='w-full'>Our project</li>
<li className='w-full'>Community</li>
<li className='w-full'>Resources</li>
<div className= 'flex flex-col lsmall:hidden'>
    <button className='pl-[18px] text-[16px] font-[700] text-white bg-transparent text-left py-4 font-dmsans hover:text-signup-lemon'>Sign In</button>
    <button className='px-[30px] py-[10px] rounded-[10px] border-[1px] border-solid border-signup-lemon text-[16px] text-signup-lemon  bg-black-bg font-dmsans hover:text-people-lemon'>Sign Up</button>
</div>
</ul>
    </div>
  )
}

export default Navbar