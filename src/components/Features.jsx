import React from 'react'
import Feature from './Feature'
import commercial from '../assets/charticon.svg'
import social from '../assets/usersicon.svg'
import games from '../assets/gameicon.svg'
import education from '../assets/baricon.svg'
import medical from '../assets/likeicon.svg'
import entertainment from '../assets/videoicon.svg'
import business from '../assets/briefcase.svg'
import art from '../assets/pictureicon.svg'

const Features = () => {
  return (
    <div className='mt-[60px] mb-[20px]'>
       <div className="flex justify-center items-center"> <h1 className='text-[46px] mt-[30px] mx-[20px] md:text-[56px] font-[700] leading-[60px] text-center text-white'>Discover the <span className='text-people-lemon'>world</span> based on your likes</h1></div>
        <div className="mx-[30px] mt-[40px] mb-[20px]">
        <div className='border-[1px] border-solid border-white rounded-[30px] w-[100%] h-[100%] lg:h-[635px] flex flex-row justify-around flex-wrap'>
        <Feature image={commercial} text="VR for commercial"/>
        <Feature image={social} text="VR for social"/>
        <Feature image={games} text='VR for games'/>
        <Feature image={education} text='VR for education' />
       <Feature image={medical} text='VR for medical'/>
        <Feature image={entertainment} text='VR for entertainment'/>
        <Feature image={business} text='VR for business'/>
        <Feature image={art} text='VR for art'/>
       
        </div>
        </div>
    </div>
  )
}

export default Features