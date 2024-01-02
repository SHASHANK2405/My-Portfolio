import React , { useEffect } from "react";
import dots from "../assets/dots.png";
import circle from "../assets/circle.png";
import cube from "../assets/cube.png";
import plus from "../assets/plus.png";
import zigzag from "../assets/zigzags.png";
import shashank from "../assets/shashankgulati1.jpg";
import "./HeroS.css";
import Typed from 'typed.js';


const HeroS = () => {
  useEffect(() => {
    var typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });
    
    // Cleanup Typed.js instance when the component unmounts
    return () => {
      typeData.destroy();
    };
  }, []);

  return (
    
    <div className="relative flex justify-center items-center gap-20 mx-auto my-16 px-4 pb-32 sm:flex-row">
      <div className="absolute select-none text-6xl text-gray-300 bottom-16 left-0 font-bold transition-all duration-3000">Shashank Gulati</div>
      <div className="flex flex-col justify-center gap-8">
        <div className="text-2xl text-blue-900 font-medium">Hi!! Shashank Gulati</div>
        <div className="text-blue-900 font-medium text-5xl leading-10">
          I am a <span className="role text-indigo-600 font-extrabold" ></span>
        </div>
        <div className="mt-4 w-3/5 font-medium">
          I'm a software developer, and here is my portfolio website. Here
          you'll learn about my journey as a software developer.
        </div>
        <div className="btn-pink" id="btn">
          Hire me
        </div>
      </div>
      <div className="relative">
        <div className="absolute icons z-9 bottom-[-1rem] right-0 icon-dots animation-dotsAnimation">
          <img src={dots} alt="styling" />
        </div>
        <div className="absolute icons z-9 top-[-0.8em] right-[1em] icon-cube animate-cubeRotate">
          <img src={cube} alt="styling" />
        </div>
        <div className="absolute icons z-9 left-0 bottom-0 icon-circle animate-shakeEffect">
          <img src={circle} alt="styling" />
        </div>
        <div className="absolute icons z-9 top-[1.5em] left-[-0.3em] icon-zigzag">
          <img src={zigzag} alt="styling" />
        </div>
        <div className="absolute icons z-9 top-[-0.8rem] left-1/2 icon-plus animate-shakeEffectPlus">
          <img src={plus} alt="styling" />
        </div>
        <div className=" relative p-10 filter grayscale transition-all duration-1000 custom-animation">
          <img src={shashank} className="z-[-9]" alt="main" height="390px" width="345px" />
        </div>
      </div>
    </div>
    
    
  );
};

export default HeroS;
