import React from "react";
import "../styles/hero.css";
import NeofolksHero from "../assets/NeofolksHero.png";
import TinkerthonArrow from '../assets/TinkerthonArrow.png'
import NUVlogo from '../assets/NUVlogo.png'
import Nuvyuvalogo from '../assets/Nuvyuvalogo.png'
import RegisterNowButton from "../components/RegisterNowButton";

function Hero() {
  return (
    <div className="w-full h-[80svh] bg-[#00020f]">
      {/* BG PAPER goes here */}
      {/* <img src="" id='bg' alt="" /> */}

      {/* NUV and NUVyuva imgs */}
      <img src={NUVlogo} className="absolute top-5 md:top-10 md:left-5 max-w-[150px] md:max-w-none" alt="" />
      <img src={Nuvyuvalogo} className="absolute top-5 right-5 max-w-[70px] md:max-w-none" alt="" />

      {/* Neofolks hero title img */}
      <img
        src={NeofolksHero}
        className="relative top-28 left-0 right-0 ml-auto mr-auto w-[90%] max-w-[800px]"
        alt="neofolks hero"
        />

      {/* Tinkerthon arrow img */}
      <img src={TinkerthonArrow} className="relative left-[-130px] md:left-[-150px] top-28 right-0 ml-auto mr-auto max-w-[100px] md:max-w-none" alt="" />
      
      {/* Parent div for buttons and hero text */}
      <div className=" relative top-28 flex flex-col items-center gap-6">
        {/* Buttons */}
        <div className="w-full flex justify-center items-center space-x-4">
            <RegisterNowButton/>
            <button className="bg-[#232323] p-2 px-6 rounded-3xl text-white hover:bg-[#afafaf] hover:text-black">View Events</button>
        </div>
        {/* Hero Text */}
        <div className="md:w-1/2 md:max-w-[600px] px-2 md:px-0">
            <p className="text-white text-center text-xl">
                Liveblocks provides developers with a complete toolkit to embed performant collaboration features to your product remarkably fast.
            </p>
        </div>
      </div>


    </div>
  );
}

export default Hero;
