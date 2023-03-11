import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import Schedule from "./sections/Schedule";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col justify-center items-center gap-10 lg:gap-4 bg-bg-dark-blue">
        {/* <Navbar/> */}
        <Hero />
        <Events />
        <Schedule />
      </div>
    </BrowserRouter>
  );
}

export default App;
