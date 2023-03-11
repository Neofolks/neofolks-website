import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import Schedule from "./sections/Schedule";
import { BrowserRouter } from "react-router-dom";
import About from "./sections/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col justify-center items-center gap-10 lg:gap-4 bg-bg-dark-blue">
        {/* <Navbar/> */}
        <Hero />
        <Events />
        <Schedule />
        <About/>
      </div>
    </BrowserRouter>
  );
}

export default App;
