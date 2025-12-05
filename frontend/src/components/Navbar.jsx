import React, { useState, useEffect } from 'react';
import { 
  FaHome, FaUser, FaCode, FaBriefcase, FaTrophy, 
  FaCertificate, FaPhone, FaGithub, FaLinkedin, 
  FaEnvelope, FaBars, FaTimes, FaChevronDown 
} from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  
  // New State to track scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', icon: <FaHome />, path: '<Home/>' },
    { name: 'About', icon: <FaUser />, path: '#about' },
    { name: 'Projects', icon: <FaCode />, path: '#projects', hasDropdown: true },
    { name: 'Experience', icon: <FaBriefcase />, path: '#experience' },
    { name: 'Hackathons', icon: <FaTrophy />, path: '#hackathons' },
    { name: 'Certificates', icon: <FaCertificate />, path: '#certificates' },
    { name: 'Contact', icon: <FaPhone />, path: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out shadow-lg
        ${isScrolled 
          ? 'bg-black h-20'         // State: Scrolled (Black background, Smaller height)
          : 'bg-[#311b92] h-24'     // State: Top (Purple background, Taller height)
        }
      `}
    >
      {/* Container height must match nav height for centering, using h-full */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-cyan-400 tracking-wide hover:text-cyan-300 transition duration-300">
              My Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a 
                  href={link.path}
                  className="flex items-center space-x-2 text-sm font-medium hover:text-cyan-300 transition duration-300 px-2 py-2"
                  onMouseEnter={() => link.hasDropdown && setIsProjectDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsProjectDropdownOpen(false)}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                  {link.hasDropdown && <FaChevronDown className="text-xs ml-1" />}
                </a>

                {/* Dropdown */}
                {link.hasDropdown && isProjectDropdownOpen && (
                  <div 
                    className={`absolute left-0 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 transition-colors duration-300
                      ${isScrolled ? 'bg-gray-900' : 'bg-[#4527a0]'}
                    `}
                    onMouseEnter={() => setIsProjectDropdownOpen(true)}
                    onMouseLeave={() => setIsProjectDropdownOpen(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-cyan-700">Web Dev</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-cyan-700">Cloud Computing</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-xl hover:text-cyan-300 transition"><FaGithub /></a>
            <a href="#" className="text-xl hover:text-cyan-300 transition"><FaLinkedin /></a>
            <a href="#" className="text-xl hover:text-cyan-300 transition"><FaEnvelope /></a>
            
            <button className="bg-slate-800 p-2 rounded-md hover:bg-slate-700 transition border border-slate-600">
              <MdSettings className="text-xl text-white animate-spin-slow" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden border-t border-gray-700 ${isScrolled ? 'bg-black' : 'bg-[#281478]'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium hover:bg-cyan-900 hover:text-cyan-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;