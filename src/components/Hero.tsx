import React from "react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col max-[300px]:gap-10 max-[400px]:gap-16 max-[500px]:gap-20 max-[600px]:gap-24 gap-32 items-center px-5 sm:px-10 md:px-16 lg:px-20 mt-10">
      <div className='flex justify-center'>
        <div className=" max-[360px]:scale-[0.59] max-[440px]:scale-[0.69] max-[520px]:scale-[0.8] max-[590px]:scale-[0.9]  w-[200px] h-[300px] md:w-[250px] md:h-[350px] relative">
          <img
            src="/hero1.jpeg"
            className="border-3 border-primary rounded-lg w-full h-full absolute shadow-2xl z-10"
            alt=""
          />
          <img
            src="/hero2.jpeg"
            className="border-3 border-primary rounded-lg w-full h-full absolute shadow-2xl right-[-120px] top-[25%] rotate-[16deg]"
            alt=""
          />
          <img
            src="/hero3.jpeg"
            className="border-3 border-primary rounded-lg w-full h-full absolute shadow-2xl left-[-120px] top-[15%] rotate-[-15deg]"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-foreground/90 text-center">
          Be the First to Experience <br />{" "}
          <span className="font-fancy text-primary text-2xl sm:text4xl md:text-[42px]">MyCribb</span>-
          Launching Soon
        </h1>
        <p className="w-full sm:w-[70%] text-center font-semibold text-foreground/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          doloremque facere velit ipsum, natus hic consequuntur provident
          beatae, reprehenderit error, autem ratione repellendus aut a ullam
          possimus esse suscipit quis?
        </p>
        <div className="px-3 py-2 bg-gray-100 rounded-md flex">
          <input
            type="text"
            className="text-sm placeholder:font-semibold w-full sm:w-[400px] outline-none"
            placeholder="Enter Email Address"
          />
          <Button className="rounded-sm">Join Waitlist</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
