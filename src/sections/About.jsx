import React from 'react'
import TelephoneImg from '../assets/Telephone.webp'

function About() {
  return (
    <div className="relative h-fit lg:min-h-[750px] w-full text-white flex flex-col items-center gap-10 px-2 section" id="about">

        {/* Telephone img */}
        <img src={TelephoneImg} className='hidden lg:block absolute bottom-0 left-0 z-10' alt="" />
        <div className='absolute w-[550px] h-[550px] rounded-full bottom-0 left-0 bg-[#A6A739] right-0 blur-[100px] opacity-[.15] hidden lg:block'></div>

    
        {/* Title */}
        <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl md:text-7xl font-['MonumentExtended'] text-center heading-gradient">About Us</h1>
        </div>

        {/* About us text */}
        <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center items-center'>
            <p className='text-center text-xl'>Liveblocks provides developers with a complete toolkit to embed performant collaboration features to your product remarkably fast.Liveblocks provides developers with a complete toolkit to embed performant collaboration features to your product remarkably fast.</p>
        </div>

        {/* Contact button */}
        <button disabled className="bg-[#232323] p-2 px-6 rounded-3xl text-white hover:bg-[#afafaf] hover:text-black font-semibold cursor-pointer">Contact Us</button>
  </div>
  )
}

export default About