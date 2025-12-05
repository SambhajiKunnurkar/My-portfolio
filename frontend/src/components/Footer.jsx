import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-8 border-t border-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side: Copyright Text */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Sambhaji Kunnurkar. All rights reserved.
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<FaGithub />} />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialLink href="https://instagram.com" icon={<FaInstagram />} />
            <SocialLink href="https://youtube.com" icon={<FaYoutube />} />
          </div>

        </div>
      </div>
    </footer>
  );
};

// Helper component for cleaner code
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Footer;