import React from 'react'
import '../styles/events.css'
import Tinkerthon from '../assets/Tinkerthon.webp'
import CADchaos from '../assets/CADchaos.webp'
import Derby from '../assets/Derby.webp'
import TechTalks from '../assets/TechTalks.webp'
import RegisterNowButton from '../components/RegisterNowButton'
import NewspaperMan from '../assets/NewspaperMan.webp'
import BlueThing from '../assets/BlueThing.png'
import YellowThing from '../assets/YellowThing.webp'
import GreenThing from '../assets/GreenThing.png'
import RedThing from '../assets/RedThing.png'
import RedThing2 from '../assets/RedThing2.png'

function Events() {
  return (
    <div className='relative w-full lg:mb-[10%]'>
        <div className="relative flex flex-col w-full lg:px-28 px-3" id='events'>

            {/* Background glow */}
            <div className='absolute w-full h-full bg-[#F66902] right-0 blur-[100px] opacity-[.15] hidden md:block'></div>

            {/* Tech events big heading */}
            <div className='relative flex flex-col items-end pr-2 text-white'>
                <img src={RedThing2} className='absolute top-[-50%] right-[-2%]' alt="" />
                <h1 className="text-5xl md:text-7xl font-['MonumentExtended'] text-end text-[#E3E3E3]">Tech Events</h1>
                <h1 className="text-2xl md:text-2xl font-['montserrat']">@ Nuvyuva 2023</h1>
            </div>

            {/* Tinkerthon */}
            <div className='relative min-h-[70svh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 mt-4 lg:mt-0'>
                {/* Left side img */}
                <div className='bg-[#ffffff] bg-opacity-10 aspect-video rounded-xl p-8 md:p-0 w-1/2 min-w-[250px] max-w-[500px] flex justify-center items-center'>
                    <img src={Tinkerthon} className='md:w-[90%]'  alt="" />
                </div>

                {/* Right side text and button */}
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 md:items-end items-center'>
                    <div className="relative font-['familjen_grotesk']">
                        {/* Red design behind text */}
                        <img src={RedThing} className='absolute w-2/3 right-[-20%] top-[-20%] lg:top-[-60%]' alt="" />
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
        <div className='relative min-h-[70svh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full lg:px-28 px-3'>

            {/* Background glow */}
            <div className='absolute w-full h-full bg-[#5AC99a] right-0 blur-[100px] opacity-10 hidden md:block'></div>

            {/* Left side text and button */}
            <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 md:items-start items-center z-10'>
                <div className="relative font-['familjen_grotesk']">
                    {/* Green design behind text */}
                    <img src={GreenThing} className='absolute left-[-50%] top-[-20%] lg:top-[-30%] ' alt="" />
                    <h2 className="text-4xl md:text-6xl text-center md:text-start text-white font-['familjen_grotesk']">CAD Chaos</h2>
                    <h2 className='text-3xl md:text-5xl text-center md:text-start text-white'>(CAD)</h2>
                </div>
                <div>
                    <p className='text-center md:text-start md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
                </div>
                <RegisterNowButton/>
            </div>
            {/* Right side img */}
            <div className='bg-[#ffffff] bg-opacity-10 p-4 md:p-0 aspect-video w-1/2 min-w-[250px] max-w-[500px] rounded-xl flex justify-center items-center'>
                <img src={CADchaos} className='aspect-video'  alt="" />
            </div>
        </div>

        {/* Derby Race */}
        <div className='relative min-h-[70svh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full lg:px-28 px-3'>

            {/* Background glow */}
            <div className='absolute w-full h-full bg-[#A6A739] right-0 blur-[100px] opacity-[.15] hidden md:block'></div>

            {/* Left side img */}
            <div className='bg-[#838383] aspect-video bg-opacity-10 p-4 md:p-0 rounded-xl w-1/2 min-w-[250px] max-w-[500px] flex justify-center items-center'>
                <img src={Derby} className='aspect-video md:w-[90%] rounded-lg' alt="" />
            </div>

            {/* Right side text and button */}
            <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 md:items-end items-center z-10'>
                <div className="relative font-['familjen_grotesk']">
                    {/* Yellow design behind text */}
                    <img src={YellowThing} className='absolute w-4/5 top-[-40%] lg:top-[-60%] right-[-20%] -z-10' alt="" />
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
        <div className='relative min-h-[70svh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 w-full lg:px-28 px-3'>

            {/* Background glow */}
            <div className='absolute w-full h-full bg-[#4379E2] right-0 blur-[100px] opacity-[.15] hidden md:block'></div>

            {/* Left side text and button */}
            <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 md:items-start items-center z-10'>
                <div className="relative font-['familjen_grotesk']">
                    {/* Blue design thing behind text */}
                    <img src={BlueThing} className='absolute left-[-40%] top-[-40%] -z-10' alt="" />
                    {/* Actual text */}
                    <h2 className='text-4xl md:text-6xl text-center md:text-start text-white'>Tech Talks</h2>
                    <h2 className='text-3xl md:text-5xl text-center md:text-start text-white'>ft. Neofolks</h2>
                </div>
                <div>
                    <p className='text-center md:text-start md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
                </div>
                <RegisterNowButton/>
            </div>
            {/* Right side img */}
            <div className='bg-[#838383] aspect-video bg-opacity-10 p-4 md:p-0 w-1/2 min-w-[250px] max-w-[500px] rounded-xl flex justify-center items-center'>
                <img src={TechTalks} className='aspect-video md:w-[90%]' alt="" />
            </div>
        </div>

    {/* Newspaper man image */}
    <img src={NewspaperMan} className='hidden lg:block md:max-w-[250px] xl:max-w-none absolute bottom-[-5%] left-0 right-0 mx-auto z-10' alt="" />
    <div className='absolute w-[400px] h-[400px] rounded-full bottom-[-5%] left-0 right-0 mx-auto bg-[#4379E2] blur-[100px] opacity-[.15] hidden lg:block'></div>


    </div>
  )
}

export default Events