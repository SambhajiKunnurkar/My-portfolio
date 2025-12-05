import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section 
      id="home"
      // FIX: Added 'pt-32' for mobile to push content down below the navbar
      // and 'md:pt-0' for desktop where flex-centering usually handles it well.
      className="h-screen w-full bg-gradient-to-b from-[#2d126f] to-[#4d1c99] flex flex-col justify-center items-center text-white relative px-4 pt-32 md:pt-0"
    >
      {/* Main Content Container */}
      <div className="text-center max-w-4xl mx-auto z-10"> {/* Added z-10 to ensure it sits above background elements */}
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Sambhaji Kunnurkar</span>
        </h1>
        
        {/* Roles */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
          Software Developer
          <br />
          Full Stack Engineer
        </h2>
        
        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Passionate about building innovative solutions with Java, Python, MERN stack, and Cloud Computing. 100+ day DSA streak on LeetCode.
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <SocialLink href="https://github.com" icon={<FaGithub size={28} />} />
          <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={28} />} />
          <SocialLink href="https://youtube.com" icon={<FaYoutube size={28} />} />
          <SocialLink href="https://instagram.com" icon={<FaInstagram size={28} />} />
          <SocialLink href="mailto:your@email.com" icon={<FaEnvelope size={28} />} />
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition transform hover:scale-105 focus:outline-none shadow-lg">
            View My Work
          </button>
          <button href='#Contact' className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-semibold text-lg transition transform hover:scale-105 hover:bg-white hover:text-[#3d1484] focus:outline-none">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce text-gray-300">
        <span className="text-sm mb-2">Scroll Down</span>
        <FiChevronDown size={24} />
      </div>
    </section>
  );
};

// Helper component for social links
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

export default HeroSection;