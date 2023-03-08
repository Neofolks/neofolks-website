import { useState } from "react";
import "./App.css";
import RsvpForm from "./components/RsvpForm";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Events from "./sections/Events";

function App() {
  return (
    <div className="App border-4 border-black flex flex-col justify-center items-center">
      {/* <RsvpForm /> */}
      {/* <Navbar/> */}
      <Hero/>
      <Events/>
    </div>
  );
}

export default App;
