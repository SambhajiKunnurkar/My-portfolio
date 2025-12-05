import React from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-cyan-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Panel: Contact Information */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500/10 p-3 rounded-lg text-teal-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Email</h4>
                    <p className="text-gray-400">sambhajikunnurkar2002@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Phone</h4>
                    <p className="text-gray-400">+91 9448825108</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Location</h4>
                    <p className="text-gray-400">Belgaum, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <SocialBtn icon={<FaLinkedin />} href="https://linkedin.com" />
                <SocialBtn icon={<FaGithub />} href="https://github.com" />
                <SocialBtn icon={<FaInstagram />} href="https://instagram.com" />
                <SocialBtn icon={<FaYoutube />} href="https://youtube.com" />
              </div>
            </div>
          </div>

          {/* Right Panel: Message Form */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            {/* Added onSubmit preventDefault to stop page reload */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="bg-[#334155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-600 placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-[#334155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-600 placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  placeholder="What's this about?" 
                  className="bg-[#334155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-600 placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Hello Sambhaji, I'd like to talk about..." 
                  className="bg-[#334155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-600 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* DISABLED BUTTON */}
              <button 
                type="button"
                disabled
                className="w-full bg-slate-600 text-gray-400 font-bold py-3 rounded-lg cursor-not-allowed opacity-60 shadow-none"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#334155] p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600 transition duration-300"
  >
    {icon}
  </a>
);

export default Contact;