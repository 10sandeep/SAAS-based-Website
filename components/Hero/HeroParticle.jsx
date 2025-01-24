"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "@/components/ui/particles";

export function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // Set the color of the particles to white directly
    setColor("#ffffff");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden md:shadow-xl bg-black">
    
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color} // Particles will be white
        refresh
      />
    </div>
  );
}

export default ParticlesDemo;
