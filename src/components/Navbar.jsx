import React from "react";

function Navbar() {
  return (
    <nav className="fixed bottom-0 w-[95%] min-w-[300px] md:max-w-[500px] h-[8vh] min-h-[70px] max-h-[80px] bg-[#2B2B2B] rounded-xl m-2 px-3 gap-2 flex justify-center items-center">
      {/* First link */}
      <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
        <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            Home
        </div>
      </div>

      {/* Second link */}
      <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
        <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            Events
        </div>
      </div>

      {/* Third link */}
      <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
        <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            Schedule
        </div>
      </div>

      {/* Fourth link */}
      <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
        <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm">
            About
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
