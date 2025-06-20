import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#111111] text-white">
    {/* Left Sidebar */}
    <div className="w-full lg:w-[20%] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-800">
      <div className="flex flex-col items-center text-center gap-10">
        {/* Logo */}
        <img src="/logo.png" alt="Vayuz Logo" className="w-40" />

        {/* Contact Us Button */}
        <button className="relative inline-block rounded-full p-[3px] bg-gradient-to-r from-green-400 via-red-500 via-pink-500 via-purple-500 to-blue-800">
          <span className="block rounded-full bg-[#111] px-8 py-3 text-white text-base font-semibold tracking-wide">
            CONTACT US
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="space-y-6 text-base font-medium text-left w-full font-poppins pl-[12px]">
          <a href="#" className="hover:text-cyan-400 block">App Development</a>
          <a href="#" className="hover:text-cyan-400 block">Challenges</a>
          <a href="#" className="hover:text-cyan-400 block">Hire Developer</a>
          <a href="#" className="hover:text-cyan-400 block">Community</a>
        </nav>
      </div>

      {/* Image + Caption */}
      <div className="mt-[50px] text-center">
        <img src="/desk.png" alt="Workspace" className="rounded-md mb-2 mx-auto w-full max-w-[250px]" />
        <p className="text-xs text-gray-400 px-2">Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.</p>
      </div>
    </div>

    {/* Right Content Area */}
    <div className="w-full lg:w-[80%] p-5 space-y-20">
      {/* Top Banner Text */}
      <div className="text-sm text-gray-300 border-b border-gray-700 pb-2 mb-8">
        Securing Your Flutter App: Best Practices and Techniques
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between font-poppins">
        {/* Text Content */}
        <div className="max-w-xl text-left">
          <h1 className="text-[34px] md:text-[44px] leading-snug mb-4 font-playfair">
            Unlock the Potential <br className="hidden sm:block" /> of Flutter
          </h1>
          <p className="text-base md:text-lg text-white mb-6 tracking-wide">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2.5 px-6 text-sm md:text-base rounded-full shadow-lg transition-all">
            UPGRADE YOUR TECH
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/code.png"
            alt="Flutter Graphic"
            className="rounded-lg shadow-xl w-full max-w-[750px]"
          />
        </div>
      </div>

      {/* Other Sections (Unchanged but already responsive) */}
      {/* Section 2: Flutter's Dawn */}
      <section className="w-full px-5 md:px-10 py-16 bg-[#111111] text-white font-serif relative pl-[5px]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-10">
          <div className="w-full lg:w-1/4 min-w-[200px]">
            <h2 className="text-4xl font-playfair font-bold leading-tight mb-2">
              Flutter's<br />Dawn
            </h2>
            <p className="text-sm text-gray-400">History of flutter</p>
          </div>
          <div className="flex-1 text-center max-w-3xl mx-auto">
            <p className="text-base text-gray-300 leading-relaxed mb-2">
              Uncover the fascinating story of Flutter in 'Flutter’s Dawn: History of Flutter.'
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Whether tech enthusiast or curious mind, join us on this captivating journey!
              <span className="text-cyan-400 font-semibold cursor-pointer"> Click to begin!</span>
            </p>
          </div>
          <div className="hidden lg:block w-1/4"></div>
        </div>
        <div className="absolute bottom-5 right-5">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all">
            BEGIN <span className="text-lg">↗</span>
          </button>
        </div>
      </section>








<section className="bg-[#111] text-white py-16 px-4 text-center pl-[5px]">
  <h1 className="text-4xl md:text-5xl font-semibold mb-6 font-playfair">
    Our Dynamic Services Suite!
  </h1>

  <p className="text-xl md:text-2xl mb-4 font-poppins">
    Embrace Innovation: Let's Create Together!
  </p>

  <p className="text-base md:text-lg max-w-2xl mx-auto font-poppins text-white/80">
    Step into innovation! Explore our range of services and let's create something extraordinary together. <br />
    Your vision, our expertise. Let's begin!
  </p>
</section>







    <section className=" text-white px-6 py-12 md:px-16 lg:px-24 font-serif pl-[5px]">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">Flutter App Development</h2>
            <p className="text-gray-300 text-base md:text-lg">
              Unlock endless possibilities with Flutter App Development. Build beautiful,
              high-performance applications for any platform – faster and easier than ever before.
              Ready to revolutionize your app experience?
              <span className="text-cyan-400 font-medium ml-1 cursor-pointer hover:underline">
                Let's get started today!
              </span>
            </p>
          </div>

          {/* Other Service Items */}
          <div className="space-y-6 text-2xl md:text-3xl">
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span>UI/UX Design</span>
              <span className="text-3xl">+</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span>Customization & Integration</span>
              <span className="text-3xl">+</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span>Testing & Quality Assurance</span>
              <span className="text-3xl">+</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span>Maintenance & Support</span>
              <span className="text-3xl">+</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span>Consulting & Training</span>
              <span className="text-3xl">+</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <span>Migration & Upgrades</span>
              <span className="text-3xl">+</span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/appdev.png" // Replace with actual image path
            alt="App Showcase"
            className="rounded-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>


                









    <section className="bg-[#111] text-white px-6 md:px-16 py-12 font-sans pl-[5px]">
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-6">
        
        {/* Left - Navigation Links */}
        <div className="flex gap-10 flex-wrap text-base md:text-lg font-medium text-white/150">
          <span>Events</span>
          <span>Gen AI</span>
          <span>Careers</span>
          <span>Case study</span>
          <span>SME Talks</span>
        </div>

        {/* Right - Big Heading */}
        <div className="ml-auto text-right font-serif">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Connect<br />With Us
          </h2>
        </div>
      </div>
    </section>





    <section className="bg-[#111] text-white px-6 md:px-16 py-20 font-sans pl-[5px]">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side Text */}
        <div>
          <p className="text-4xl md:text-5xl font-light leading-snug mb-8">
            For any collaborative <br />
            projects or enquiries feel free <br />
            to connect with us.
          </p>
          <p className="text-3xl font-semibold">vayuz.com</p>
        </div>

        {/* Right Side Form */}
        <form className="w-full max-w-md space-y-10">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none text-lg pb-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none text-lg pb-2"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none text-lg pb-2"
            />
          </div>
          <div className="pt-4 text-right">
            <button
              type="submit"
              className="px-8 py-2 text-white font-semibold border border-cyan-400 rounded-full hover:bg-cyan-700 hover:border-cyan-500 transition-all"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>



    <footer className="bg-[#111] text-white px-6 md:px-16 py-6 pl-[5px]">
      <div className="flex gap-10 text-base md:text-lg font-medium font-sans">
        <span>About</span>
        <span>Insights</span>
        <span>Community</span>
        <span>Privacy & Policies</span>
      </div>
    </footer>





      </div>
    </div>
  );
}

export default Hero;
