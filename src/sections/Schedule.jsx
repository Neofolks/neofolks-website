import React from "react";

function Schedule() {
  return (
    <div className="h-screen w-full text-white" id="schedule">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl">Event Schedule</h1>
        <h2 className="text-lg">Mark your calendars</h2>
      </div>

      {/* Divider */}
      <div className="h-[4px] w-1/2 my-4 bg-slate-600 ml-auto mr-auto"></div>
    </div>
  );
}

export default Schedule;
