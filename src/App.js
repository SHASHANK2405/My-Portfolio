import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import HeroS from "./Components/HeroS.jsx";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import React from "react";
import Contact from "./Components/Contact";

function APP () {

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">

      <div className="mx-auto max-w-screen-xl">
        <Navbar/>
        <HeroS/>
      </div>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default APP;