import React from "react";
import "../styles/hero.css";
import NeofolksHero from "../assets/NeofolksHero.webp";
import TinkerthonArrow from '../assets/TinkerthonArrow.png'
import NUVlogo from '../assets/NUVlogo.webp'
import Nuvyuvalogo from '../assets/Nuvyuvalogo.webp'
import RegisterNowButton from "../components/RegisterNowButton";
import RegisterModal from "../components/RegisterModal";

function Hero() {
  return (
    <div className="relative w-full min-h-[100svh] bg-bg-dark-blue flex flex-col justify-between items-center" id="home">
      {/* BG PAPER goes here */}
        {/* <img src="../assets/BigBGPaper.png" className="absolute bg-cover" id='bg' alt="" /> */}

      {/* NUV and NUVyuva imgs */}
      <div className="w-full flex justify-between items-center p-2">
        <img src={NUVlogo} className="max-w-[150px] md:max-w-none" alt="" />
        <img src={Nuvyuvalogo} className="max-w-[70px] md:max-w-none" alt="" />
      </div>

      {/* Neofolks hero title img */}
      <img
        src={NeofolksHero}
        className="w-[95%] max-w-[800px]"
        alt="neofolks hero"
        />
      
      {/* Parent div for buttons and hero text */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Tinkerthon arrow img */}
        {/* <div className="w-[90%]"> */}
          {/* <img src={TinkerthonArrow} className="absolute top-[-10%] left-0 max-w-[125px] md:max-w-none" alt="" /> */}
        {/* </div> */}
        {/* Buttons */}
        <div className="w-full flex justify-center items-center space-x-4">
            <RegisterModal/>
            <button disabled className="bg-[#232323] p-2 px-6 rounded-3xl text-white hover:bg-[#afafaf] hover:text-black font-semibold">View Events</button>
        </div>
        {/* Hero Text */}
        <div className="md:w-1/2 md:max-w-[1000px] px-2 md:px-0 space-y-3 pb-10">
            <p className="text-white text-center text-md md:text-xl">
                Are you ready for an unforgettable experience! Join us at Tinkerthon, where you'll have the opportunity to connect with aspiring individuals, participate in interactive sessions, and hear from industry experts. This event is designed to inspire and unlock your inner innovator.
            </p>
            <p className="text-white text-center text-md md:text-xl">
            Whether you're interested in learning new skills, networking with peers, or simply having fun, Tinkerthon has something for everyone. So don't miss out on this chance to grow and discover new opportunities. Register now and be a part of this exciting 36 hour event!
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
