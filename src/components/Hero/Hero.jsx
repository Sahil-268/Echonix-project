import React from "react";
import HeroImg from "../../assets/hdphn-grl.png";

const Hero = () => {
  return (
    <section className="px-6 py-5">
      <div className="overflow-hidden relative bg-gradient-to-br from-[#2563EB] to-[#06B6D4] min-h-[550px] p-10 m-10 rounded-[2.5rem] flex justify-between shadow-2xl shadow-blue-200">
        <div className="z-10 flex flex-col justify-between text-white">
          <div className=" flex flex-col justify-between gap-4">
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight mb-6 capitalize">
              Elevate your
              <span className="text-cyan-200"> audio journey</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/80 font-medium leading-relaxed mb-10 max-w-lg">
              Experience sound like never before with Echonix. Premium noise
              cancellation, 40-hour battery life, and spatial audio that puts
              you in the center of the music.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <button className="bg-white text-[#2563EB] px-8 py-4 rounded-full hover:bg-blue-50 font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              Shop Now
            </button>
            <button className="text-white border-2 border-white/40 px-8 py-4 rounded-full  font-bold hover:border-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex items-end self-end justify-end w-full h-full">
          <img
            src={HeroImg}
            alt="Hero image"
            className="relative z-10 max-w-[500px] object-contain self-end translate-y-20 transition-transform duration-700 hover:translate-y-14 hover:scale-105 animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
