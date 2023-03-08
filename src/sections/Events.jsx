import React from 'react'
import '../styles/events.css'
import Tinkerthon from '../assets/Tinkerthon.png'
import CADchaos from '../assets/CADchaos.png'
import Derby from '../assets/Derby.png'
import TechTalks from '../assets/TechTalks.png'
import RegisterNowButton from '../components/RegisterNowButton'

function Events() {
  return (
    <>
    <div className='flex flex-col w-full md:px-10 px-3 bg-[#150605]'>
        {/* Tech events big heading */}
        <div className='flex flex-col items-end pr-6 text-white'>
            <h1 className='text-5xl md:text-7xl'>Tech Events</h1>
            <h1 className='text-2xl md:text-2xl'>@ Nuvyuva 2023</h1>
        </div>

        {/* Tinkerthon */}
        <div className='min-h-[500px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0'>
            {/* Left side img */}
            <div className='bg-[#8383831a] p-6 md:p-8 w-2/3 max-w-[500px] rounded-xl flex justify-center items-center'>
                <img src={Tinkerthon} alt="" />
            </div>

            {/* Right side text and button */}
            <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-end items-center'>
                <div>
                    <h2 className='text-4xl md:text-5xl text-center md:text-end text-white'>A 36 hour Tinkerthon</h2>
                </div>
                <div>
                    <p className='text-center md:text-end md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
                </div>
                <RegisterNowButton/>
            </div>
        </div>
    </div>

    {/* CAD Chaos */}
    <div className='min-h-[600px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full md:px-10 px-3 bg-[#061613]'>
        {/* Left side text and button */}
        <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-start items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-center md:text-start text-white'>CAD Chaos</h2>
                <h2 className='text-3xl md:text-4xl text-center md:text-start text-white'>(AutoCAD)</h2>
            </div>
            <div>
                <p className='text-center md:text-start md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
            </div>
            <RegisterNowButton/>
        </div>
        {/* Right side img */}
        <div className='bg-[#8383831a] p-6 md:p-8 w-2/3 max-w-[500px] rounded-xl flex justify-center items-center'>
            <img src={CADchaos} alt="" />
        </div>
    </div>

    {/* Derby Race */}
    <div className='min-h-[500px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full md:px-10 px-3 bg-[#21220d]'>
        {/* Left side img */}
        <div className='bg-[#8383831a] p-6 md:p-8 w-2/3 max-w-[500px] rounded-xl flex justify-center items-center'>
            <img src={Derby} alt="" />
        </div>

        {/* Right side text and button */}
        <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-end items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-center md:text-end text-white'>Derby Race</h2>
                <h2 className='text-3xl md:text-4xl text-center md:text-end text-white'>(Car Modelling)</h2>
            </div>
            <div>
                <p className='text-center md:text-end md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
            </div>
            <RegisterNowButton/>
        </div>
    </div>

    {/* Tech Talks */}
    <div className='min-h-[500px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full md:px-10 px-3 bg-[#050e20]'>
        {/* Left side text and button */}
        <div className='w-full md:w-1/3 flex flex-col gap-4 md:items-start items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-center md:text-start text-white'>Tech Talks</h2>
                <h2 className='text-3xl md:text-4xl text-center md:text-start text-white'>ft. Neofolks</h2>
            </div>
            <div>
                <p className='text-center md:text-start md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
            </div>
            <RegisterNowButton/>
        </div>
        {/* Right side img */}
        <div className='bg-[#8383831a] p-6 md:p-8 w-2/3 max-w-[500px] rounded-xl flex justify-center items-center'>
            <img src={TechTalks} alt="" />
        </div>
    </div>

    </>
  )
}

export default Events