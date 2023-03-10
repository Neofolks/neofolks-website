import { useState } from "react";
import "./App.css";
import RsvpForm from "./components/RsvpForm";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import Schedule from "./sections/Schedule";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col justify-center items-center bg-bg-dark-blue">
        {/* <RsvpForm /> */}
        {/* <Navbar/> */}
        <Hero />
        {/* <Events /> */}
        {/* <Schedule /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
