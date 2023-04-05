import React from "react";
import VideoCard from "../components/VideoCard";
import videoLinks from "../../videoLinks";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-bg-dark-blue overflow-x-hidden p-2 py-4">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl md:text-7xl font-['MonumentExtended'] text-center heading-gradient">
          Tinkerthon Projects
        </h1>
      </div>

        <div className="flex justify-center items-center flex-wrap gap-4">
            {videoLinks.map(item => {
                return <VideoCard link={item.videoUrl} name={item.teamName}/>
            })}
        </div>
      
    </div>
  );
}

export default Projects;
