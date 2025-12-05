import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaGraduationCap, 
  FaUniversity,
  FaAward,
  FaSchool
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-gradient-to-b from-[#2d126f] via-[#2a0e68] to-[#100520] py-20 px-4 sm:px-6 text-white overflow-hidden">
      
      {/* --- Header Section --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Passionate developer with expertise in full-stack development and Cloud Computing
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <SocialIcon href="#" icon={<FaGithub />} />
          <SocialIcon href="#" icon={<FaLinkedin />} />
          <SocialIcon href="#" icon={<FaInstagram />} />
          <SocialIcon href="#" icon={<SiLeetcode />} /> {/* Using LeetCode icon for the code file symbol */}
        </div>
      </div>

      {/* --- Education Journey Title --- */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">
          <span className="text-cyan-400">Education</span> Journey
        </h3>
      </div>

      {/* --- Timeline Section --- */}
      <div className="max-w-5xl mx-auto relative flex flex-col items-center">
        
        {/* 1. Engineering Card (Pink/Purple) */}
        <div className="w-full relative mb-12">
          {/* Card */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 md:p-8 shadow-2xl transform transition hover:scale-[1.01] relative z-10 mx-auto md:w-[90%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h4 className="text-2xl font-bold">B.E. in Computer Science & Engineering</h4>
              <span className="mt-2 md:mt-0 px-4 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                2021 - 2025
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between">
              {/* Left Content */}
              <div className="mb-4 md:mb-0 space-y-2">
                <div className="flex items-center text-gray-100">
                  <FaUniversity className="mr-2" />
                  <span>S.G. Balekundri Institute of Technology, Belgaum</span>
                </div>
                <div className="flex items-center text-gray-100 font-semibold">
                  <FaAward className="mr-2 text-yellow-300" />
                  <span>CGPA: 7.8/10</span>
                </div>
                <div className="mt-4 flex space-x-2">
                   {/* Decorative dots matching screenshot */}
                   {/* <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                   <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-75"></div>
                   <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-150"></div> */}


                   {/* <div className="text-left md:text-left space-y-1 text-sm md:text-base text-white/90">
                <p>Specialized in AI and Backend Systems</p>
                <p>200+ day DSA streak on LeetCode/GFG</p>
                <p>Participated in 4 national hackathons</p>
              </div> */}





                </div>
              </div>

              {/* Right Content (Bullets) */}
              
            </div>
          </div>

          {/* Floating Icon (Right) */}
          <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
            <FaGraduationCap size={24} className="text-white" />
          </div>

          {/* Connecting Line (Vertical) */}
          <div className="absolute left-1/2 bottom-[-48px] h-12 w-1 bg-cyan-400 transform -translate-x-1/2 z-0"></div>
        </div>





        {/* 2. PUC Card (Pink/Purple) */}
        <div className="w-full relative mb-12 ">
          {/* Card */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 md:p-8 shadow-2xl transform transition hover:scale-[1.01] relative z-10 mx-auto md:w-[90%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h4 className="text-2xl font-bold">Pre-University Course (PUC)</h4>
              <span className="mt-2 md:mt-0 px-4 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                2021 - 2025
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between">
              {/* Left Content */}
              <div className="mb-4 md:mb-0 space-y-2">
                <div className="flex items-center text-gray-100">
                  <FaUniversity className="mr-2" />
                  <span>R. L. P. U. College of Science, Belagavi</span>
                </div>
                <div className="flex items-center text-gray-100 font-semibold">
                  <FaAward className="mr-2 text-yellow-300" />
                  <span>Percentage: 83.83</span>
                </div>
                
              </div>

              
              
            </div>
          </div>

          {/* Floating Icon (Right) */}
          <div className="hidden md:flex absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
            <FaUniversity size={24} className="text-white" />
          </div>

          {/* Connecting Line (Vertical) */}
          <div className="absolute left-1/2 bottom-[-48px] h-12 w-1 bg-cyan-400 transform -translate-x-1/2 z-0"></div>
        </div>


        {/* 3. Schol Card (Pink/Purple) */}
        <div className="w-full relative mb-12">
          {/* Card */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 md:p-8 shadow-2xl transform transition hover:scale-[1.01] relative z-10 mx-auto md:w-[90%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h4 className="text-2xl font-bold">High School (10th)</h4>
              <span className="mt-2 md:mt-0 px-4 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                2021 - 2025
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between">
              {/* Left Content */}
              <div className="mb-4 md:mb-0 space-y-2">
                <div className="flex items-center text-gray-100">
                  <FaUniversity className="mr-2" />
                  <span>St. Paul's English Medium High School, Belgundi, Belagavi</span>
                </div>
                <div className="flex items-center text-gray-100 font-semibold">
                  <FaAward className="mr-2 text-yellow-300" />
                  <span>Percentage: 84.64</span>
                </div>
                
              </div>

              
              
            </div>
          </div>

          {/* Floating Icon (Right) */}
          <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
            <FaSchool size={24} className="text-white" />
          </div>

          {/* Connecting Line (Vertical) */}
          
        </div>


        {/* ------------------------------------------------------------------------ */}

        


      </div>
    </section>
  );
};

// Small helper for social icons
const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    className="text-2xl md:text-3xl text-gray-300 hover:text-white hover:scale-110 transition duration-300"
  >
    {icon}
  </a>
);

export default About;