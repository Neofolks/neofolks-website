import React from 'react'
import '../styles/events.css'
import Tinkerthon from '../assets/Tinkerthon.png'
import CADchaos from '../assets/CADchaos.png'
import Derby from '../assets/Derby.png'
import TechTalks from '../assets/TechTalks.png'
import RegisterNowButton from '../components/RegisterNowButton'
import Greenglow from '../assets/Greenglow.png'

function Events() {
  return (
    <>
    <div className="relative flex flex-col w-full md:px-28 px-3 mt-6" id='events'>

        {/* Background glow */}
        <div className='absolute w-full h-full bg-[#F66902] right-0 blur-[100px] opacity-[.15] hidden md:block'></div>

        {/* Tech events big heading */}
        <div className='flex flex-col items-end pr-2 text-white'>
            <h1 className="text-5xl md:text-7xl font-['MonumentExtended'] text-end text-[#E3E3E3]">Tech Events</h1>
            <h1 className="text-2xl md:text-2xl font-['montserrat']">@ Nuvyuva 2023</h1>
        </div>

        {/* Tinkerthon */}
        <div className='relative min-h-[80svh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0'>
            {/* Left side img */}
            <div className='bg-[#ffffff] bg-opacity-10 aspect-video rounded-xl p-8 md:p-0 w-2/3 max-w-[500px] flex justify-center items-center'>
                <img src={Tinkerthon} className=''  alt="" />
            </div>

            {/* Right side text and button */}
            <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-end items-center'>
                <div className="font-['familjen_grotesk']">
                    <h2 className='text-4xl md:text-6xl text-center md:text-end text-white'>A 36 hour Tinkerthon</h2>
                </div>
                <div>
                    <p className='text-center md:text-end md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
                </div>
                <RegisterNowButton/>
            </div>
        </div>
    </div>

    {/* CAD Chaos */}
    <div className='relative min-h-[80svh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full md:px-28 px-3'>

        {/* Background glow */}
        <div className='absolute w-full h-full bg-[#5AC99a] right-0 blur-[100px] opacity-10 hidden md:block'></div>

        {/* Left side text and button */}
        <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-start items-center z-10'>
            <div className="font-['familjen_grotesk']">
                <h2 className="text-4xl md:text-6xl text-center md:text-start text-white font-['familjen_grotesk']">CAD Chaos</h2>
                <h2 className='text-3xl md:text-5xl text-center md:text-start text-white'>(CAD)</h2>
            </div>
            <div>
                <p className='text-center md:text-start md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
            </div>
            <RegisterNowButton/>
        </div>
        {/* Right side img */}
        <div className='bg-[#ffffff] bg-opacity-10 p-4 md:p-0 aspect-video w-2/3 max-w-[500px] rounded-xl flex justify-center items-center'>
            <img src={CADchaos} className='aspect-video'  alt="" />
        </div>
    </div>

    {/* Derby Race */}
    <div className='relative min-h-[80svh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full md:px-28 px-3'>

        {/* Background glow */}
        <div className='absolute w-full h-full bg-[#A6A739] right-0 blur-[100px] opacity-[.15] hidden md:block'></div>

        {/* Left side img */}
        <div className='bg-[#838383] aspect-video bg-opacity-10 p-4 md:p-0 rounded-xl w-2/3 max-w-[500px] flex justify-center items-center'>
            <img src={Derby} className='aspect-video' alt="" />
        </div>

        {/* Right side text and button */}
        <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-end items-center z-10'>
            <div className="font-['familjen_grotesk']">
                <h2 className='text-4xl md:text-6xl text-center md:text-end text-white'>Derby Race</h2>
                <h2 className='text-3xl md:text-5xl text-center md:text-end text-white'>(Car Modelling)</h2>
            </div>
            <div>
                <p className='text-center md:text-end md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
            </div>
            <RegisterNowButton/>
        </div>
    </div>

    {/* Tech Talks */}
    <div className='relative min-h-[80svh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full md:px-28 px-3'>

        {/* Background glow */}
        <div className='absolute w-full h-full bg-[#4379E2] right-0 blur-[100px] opacity-[.15] hidden md:block'></div>

        {/* Left side text and button */}
        <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-start items-center z-10'>
            <div className="font-['familjen_grotesk']">
                <h2 className='text-4xl md:text-6xl text-center md:text-start text-white'>Tech Talks</h2>
                <h2 className='text-3xl md:text-5xl text-center md:text-start text-white'>ft. Neofolks</h2>
            </div>
            <div>
                <p className='text-center md:text-start md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
            </div>
            <RegisterNowButton/>
        </div>
        {/* Right side img */}
        <div className='bg-[#838383] aspect-video bg-opacity-10 p-4 md:p-0 w-2/3 max-w-[500px] rounded-xl flex justify-center items-center'>
            <img src={TechTalks} className='aspect-video' alt="" />
        </div>
    </div>

    </>
  )
}

export default Events