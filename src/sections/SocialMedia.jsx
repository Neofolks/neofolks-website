import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

function SocialMedia() {
  return (
    <div
      className="relative h-fit lg:min-h-[750px] w-full text-white flex flex-col items-center gap-10 px-2 section"
      id="about"
    >
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl md:text-7xl font-['MonumentExtended'] text-center heading-gradient">
          Social Wall
        </h1>
      </div>

      {/* Instagram posts */}
      <div className="w-full flex justify-center gap-6 flex-wrap items-center">
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/p/Cp-0vIGNZd2/"
            className="w-[328px] h-[380px] lg:w-[428px] lg:h-[480px]"
          />
        </div>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/p/Cp2zK74t9yH/"
            className="w-[328px] h-[380px] lg:w-[428px] lg:h-[480px]"
          />
        </div>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/p/Cpsr9zntTCT/"
            className="w-[328px] h-[380px] lg:w-[428px] lg:h-[480px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
