import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      console.log(window.scrollY)
      if(window.scrollY >= 150) setVisible(true)
    })
  },[])
  
  return (
    <>
    {visible && (
      <nav className="fixed bottom-0 w-[95%] min-w-[300px] md:max-w-[500px] h-[8vh] min-h-[70px] max-h-[80px] bg-[#1d1d1d] bg-opacity-70 rounded-xl m-2 px-3 gap-2 flex justify-center items-center z-20">
        {/* First link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            <HashLink to='#home' className="w-full h-full flex justify-center items-center" smooth>Home</HashLink>
          </div>
        </div>

        {/* Second link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
              <HashLink to='#events' className="w-full h-full flex justify-center items-center" smooth>Events</HashLink>
          </div>
        </div>

        {/* Third link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            <HashLink to='#schedule' className="w-full h-full flex justify-center items-center" smooth>Schedule</HashLink>
          </div>
        </div>

        {/* Fourth link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            <HashLink to='#about' className="w-full h-full flex justify-center items-center" smooth>About</HashLink>   
          </div>
        </div>
      </nav>
    )}
    </>
  );
}

export default Navbar;
