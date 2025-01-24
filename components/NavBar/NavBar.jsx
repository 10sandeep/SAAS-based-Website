import React from 'react';
import {Logo} from "@/assets/logo.png"
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { SparklesText } from '@/components/ui/sparkles-text';

const NavBar = () => {
  return (
    <section className="py-5 px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
         
          <SparklesText text="Saasify" className="text-white text-2xl font-bold tracking-wide" />
        </div>

        {/* Navigation Links */}
        <div className="text-white mt-4 md:mt-0">
          <ul className="flex space-x-6 border border-gray-600 rounded-3xl py-3 px-10">
            <li className="hover:text-gray-400 cursor-pointer">Feature</li>
            <li className="hover:text-gray-400 cursor-pointer">Product</li>
            <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-400 cursor-pointer">Cases</li>
            <li className="hover:text-gray-400 cursor-pointer">Docs</li>
          </ul>
        </div>

        {/* Button Section */}
        <div className="mt-4 md:mt-0">
          <InteractiveHoverButton>Log In</InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
