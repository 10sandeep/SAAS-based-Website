import React from "react";
import HeroParticle from "@/components/Hero/HeroParticle";
import { TypingAnimation } from "@/components/ui/typing-animation";
import HeroButton from "@/components/Hero/HeroButton";
import { ShineBorder } from "@/components/ui/shine-border";

const HeroSection = () => {
  return (
    <div className="relative h-[100%]">
      <div className="absolute top-0 w-full h-screen z-10">
        <div className="flex items-center justify-center flex-col gap-5 py-40">
          <TypingAnimation className="text-white text-5xl">
            Turn your ideas into Business Success
          </TypingAnimation>
          <p className="text-white p-50">
            AI-powered insights and strategies tailored for your startup's
            success
          </p>

          {/* Button Section */}
          <div className="bg-black rounded-lg">
            <HeroButton />
          </div>
        </div>

        {/* Image with ShineBorder effect */}
        <div className="flex items-center justify-center mt-[-70px]">
        <ShineBorder
            className="relative h-[85%] w-[65%] flex justify-center items-center overflow-hidden rounded-lg border-none bg-transparent md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <img 
              src="https://img.freepik.com/free-vector/dashboard-element-collection_23-2148433570.jpg?t=st=1737738458~exp=1737742058~hmac=039431e547006488c95bab5882b90980ded53cc20d9043dab0d6fead6ef2936f&w=1060" 
              alt="Hero Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </ShineBorder>
        </div>
      </div>
      <HeroParticle />
    </div>
  );
};

export default HeroSection;
