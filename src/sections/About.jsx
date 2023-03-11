import React from 'react'

function About() {
  return (
    <div className="h-screen w-full text-white" id="schedule">
    {/* Title */}
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl font-['MonumentExtended'] text-center">About Us</h1>
    </div>

    {/* Divider */}
    <div className="h-[3px] w-1/2 my-4 bg-[#7e7e7e] rounded-md ml-auto mr-auto"></div>
  </div>
  )
}

export default About