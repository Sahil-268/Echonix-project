import React from "react";
import HeroImg from "../../assets/hdphn-grl.png";

const Hero = () => {
  return (
    <div className="bg-blue-300 h-100 p-10 m-10 rounded-3xl flex justify-between overflow-hidden relative">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between gap-4">
          <h1 className="text-xl font-bold mt-10 tracking-wider">
            Elevate your audio journey
          </h1>
          <p className="font-medium tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            excepturi impedit quis optio aspernatur nulla, id illo ab
            voluptatibus necessitatibus laborum? Doloremque corrupti reiciendis
            nesciunt veritatis harum minima odio enim.
          </p>
        </div>
        <div className="flex gap-10 text-white">
          <button className="bg-blue-600 px-3 py-2 mr-3 rounded-full flex gap-1 justify-center items-center">
            Shop Now
          </button>
          <button className="border-2 border-blue-600 px-3 py-2 mr-3 rounded-full flex gap-1 justify-center items-center">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex items-end h-full">
        <img
          src={HeroImg}
          alt="Hero image"
          className="w-full min-w-[300px] max-w-[450px] object-contain self-end translate-y-16"
        />
      </div>
    </div>
  );
};

export default Hero;
