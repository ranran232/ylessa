import React from "react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div>
        <Nav/>
   <section className="bg-[linear-gradient(135deg,_#fdf6ee_0%,_#f5e6d3_60%,_#ede0cf_100%)] h-auto md:min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex flex-col items-center justify-center mt-5 md:mt-0">
        <h1 className="md:hidden mb-5 text-2xl text-center font-bold text-[#2d1f14] leading-tight">
    Hi, I'm <span className="text-[#c48264]">Ylessa Rose Dumas</span> — Virtual Assistant Helping Online Businesses Stay Organized & Visible
    </h1>
          <img
            src="https://res.cloudinary.com/dtvjjump9/image/upload/v1771848109/portrait_gsmwss.avif"
            alt="Portrait"
            className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
         <h1 className="hidden md:block text-2xl md:text-5xl font-bold text-[#2d1f14] leading-tight">
    Hi, I'm <span className="text-[#c48264]">Ylessa Rose Dumas</span> — Virtual Assistant Helping Online Businesses Stay Organized & Visible
    </h1>
          <p className=" md:mt-6 text-md md:text-lg text-[#6b4c35]">
            Former ESL Tutor turned detail-oriented Virtual Assistant specializing in communication, email management, and social media support.
          </p>

          <div className="flex gap-0 md:gap-5 flex-col md:flex-row py-7 md:py-0">
          <button className="w-full mt-8 px-6 py-3 bg-[#1a1009] text-white rounded-xl shadow-md transition transform hover:-translate-y-1 duration-300">
        Work With Me
        </button>

        <a className="w-full mt-8 px-6 text-center py-3 border-[1.5px] border-[#c48264] bg-transparent text-[#2d1f14] rounded-xl shadow-md hover:bg-[#c48264] hover:text-white transition transform hover:-translate-y-1 duration-300" href="#services">
        My Services
        </a>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Hero;